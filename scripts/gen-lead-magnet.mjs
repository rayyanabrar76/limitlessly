// Generates the lead-magnet PDF into /public.
// Run with:  node scripts/gen-lead-magnet.mjs
import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

const OUT = path.join(process.cwd(), "public", "ai-saas-feasibility-checklist.pdf");

const INK = "#0a0a0a";
const MUTED = "#525252";
const ACCENT = "#4f46e5";
const LINE = "#e5e5e5";

const sections = [
  {
    title: "1. Problem & Market",
    items: [
      "The problem is specific, painful, and frequent — not a nice-to-have.",
      "You can name the exact person who has this problem.",
      "People already pay (in time or money) to solve it today.",
      "The market is big enough to build a real business on.",
    ],
  },
  {
    title: "2. The AI Angle",
    items: [
      "AI makes the product meaningfully better — it is not a gimmick.",
      "You have, or can realistically get, the data the AI needs.",
      "You know what “good enough” accuracy looks like for users.",
      "You have estimated the AI / inference cost per user or action.",
    ],
  },
  {
    title: "3. Product & Scope",
    items: [
      "You can describe the single “wow” moment in one sentence.",
      "The MVP scope realistically fits in 4–8 weeks.",
      "You can list what you are deliberately NOT building yet.",
    ],
  },
  {
    title: "4. Technical Feasibility",
    items: [
      "A known approach exists (API, RAG, fine-tuning) — no research risk.",
      "You have defined latency and accuracy targets.",
      "You have a plan for wrong answers and hallucinations.",
      "The architecture can handle auth, billing, and multi-tenancy.",
    ],
  },
  {
    title: "5. Business Model",
    items: [
      "Pricing is tied to the value delivered, not just your costs.",
      "Unit economics still work after AI / inference costs.",
      "You have a believable path from MVP to first paying customers.",
    ],
  },
  {
    title: "6. Go / No-Go",
    items: [
      "You have shown the idea to 5+ potential users and they leaned in.",
      "You would bet your own money on this before an investor’s.",
      "You know the one assumption that, if wrong, kills the idea.",
    ],
  },
];

const doc = new PDFDocument({ size: "A4", margin: 56 });
doc.pipe(fs.createWriteStream(OUT));

const W = doc.page.width;
const M = doc.page.margins.left;
const CONTENT_W = W - M * 2;
const BOTTOM = doc.page.height - doc.page.margins.bottom;

function ensureSpace(h) {
  if (doc.y + h > BOTTOM) doc.addPage();
}

// ── Cover header ──
doc.fillColor(ACCENT).fontSize(11).font("Helvetica-Bold")
  .text("LIMITLESSLY  ·  AI PRODUCT STUDIO", { characterSpacing: 1.5 });
doc.moveDown(1.5);

doc.fillColor(INK).font("Helvetica-Bold").fontSize(30)
  .text("The AI SaaS Feasibility Checklist", { lineGap: 2 });
doc.moveDown(0.4);
doc.fillColor(MUTED).font("Helvetica").fontSize(13)
  .text("Validate your AI idea before you spend $50k on engineering.", { lineGap: 2 });

doc.moveDown(1);
doc.moveTo(M, doc.y).lineTo(W - M, doc.y).lineWidth(1).strokeColor(LINE).stroke();
doc.moveDown(1);

doc.fillColor(MUTED).font("Helvetica").fontSize(10.5)
  .text(
    "Most AI products fail long before the code does — the idea was never validated. Work through the " +
    "checklist below. Tick every box you can honestly say yes to today. Your score at the end tells you " +
    "whether to build, sharpen, or wait.",
    { lineGap: 3, width: CONTENT_W }
  );
doc.moveDown(1.2);

// ── Sections ──
function checkbox(y) {
  doc.lineWidth(1.2).strokeColor(ACCENT).rect(M, y + 1, 11, 11).stroke();
}

for (const section of sections) {
  ensureSpace(60);
  doc.fillColor(INK).font("Helvetica-Bold").fontSize(14).text(section.title);
  doc.moveDown(0.5);

  for (const item of section.items) {
    doc.font("Helvetica").fontSize(10.5);
    const textX = M + 22;
    const textW = CONTENT_W - 22;
    const h = doc.heightOfString(item, { width: textW, lineGap: 2 });
    ensureSpace(h + 8);
    const y = doc.y;
    checkbox(y);
    doc.fillColor(INK).text(item, textX, y, { width: textW, lineGap: 2 });
    doc.moveDown(0.55);
  }
  doc.moveDown(0.7);
}

// ── Scoring ──
ensureSpace(150);
doc.moveTo(M, doc.y).lineTo(W - M, doc.y).lineWidth(1).strokeColor(LINE).stroke();
doc.moveDown(1);
doc.fillColor(ACCENT).font("Helvetica-Bold").fontSize(14).text("Your Score");
doc.moveDown(0.5);
const scoreRows = [
  ["18 – 21 boxes", "Strong signal. Your idea is worth building — move to a scoped MVP."],
  ["12 – 17 boxes", "Promising. Tighten the boxes you left blank before you commit budget."],
  ["Under 12 boxes", "Not yet. Validate the problem, market, and AI angle before spending."],
];
for (const [label, desc] of scoreRows) {
  doc.font("Helvetica-Bold").fontSize(10.5).fillColor(INK).text(label, { continued: true });
  doc.font("Helvetica").fillColor(MUTED).text("   —  " + desc, { lineGap: 2 });
  doc.moveDown(0.4);
}

// ── CTA ──
doc.moveDown(1);
ensureSpace(90);
const boxY = doc.y;
doc.roundedRect(M, boxY, CONTENT_W, 76, 10).fillColor("#f5f5ff").fill();
doc.fillColor(INK).font("Helvetica-Bold").fontSize(13)
  .text("Want a second opinion on your idea?", M + 20, boxY + 16);
doc.fillColor(MUTED).font("Helvetica").fontSize(10.5)
  .text(
    "Book a free 20-minute strategy call and we’ll pressure-test it with you — no pitch.",
    M + 20, boxY + 36, { width: CONTENT_W - 40 }
  );
doc.fillColor(ACCENT).font("Helvetica-Bold").fontSize(10.5)
  .text("calendly.com/rayyanabrar76/30min", M + 20, boxY + 54);

doc.end();
console.log("Wrote", OUT);
