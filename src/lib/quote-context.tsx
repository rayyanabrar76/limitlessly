"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { getProduct } from "./products";

export type QuoteItem = {
  slug: string;
  qty: number;
};

type QuoteContextType = {
  items: QuoteItem[];
  isDrawerOpen: boolean;
  isHydrated: boolean; // Prevents hydration mismatch on SSR
  itemCount: number;
  addItem: (slug: string) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, qty: number) => void;
  clearQuote: () => void;
  setDrawerOpen: (open: boolean) => void;
};

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

const STORAGE_KEY = "limitlessly_quote_v1";

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load quote from local storage:", e);
    }
    setIsHydrated(true);
  }, []);

  // Save to localStorage whenever items change
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, isHydrated]);

  const addItem = useCallback((slug: string) => {
    // Only add if the product actually exists in the catalog
    if (!getProduct(slug)) return;

    setItems((current) => {
      const existing = current.find((item) => item.slug === slug);
      if (existing) {
        return current.map((item) =>
          item.slug === slug ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...current, { slug, qty: 1 }];
    });
  }, []);

  const removeItem = useCallback((slug: string) => {
    setItems((current) => current.filter((item) => item.slug !== slug));
  }, []);

  const updateQuantity = useCallback((slug: string, qty: number) => {
    if (qty <= 0) {
      removeItem(slug);
      return;
    }
    setItems((current) =>
      current.map((item) => (item.slug === slug ? { ...item, qty } : item))
    );
  }, [removeItem]);

  const clearQuote = useCallback(() => {
    setItems([]);
  }, []);

  const itemCount = items.reduce((total, item) => total + item.qty, 0);

  return (
    <QuoteContext.Provider
      value={{
        items,
        isDrawerOpen,
        isHydrated,
        itemCount,
        addItem,
        removeItem,
        updateQuantity,
        clearQuote,
        setDrawerOpen,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error("useQuote must be used within a QuoteProvider");
  }
  return context;
}
