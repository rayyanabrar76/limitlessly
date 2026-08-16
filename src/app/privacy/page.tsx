export default function PrivacyPage() {
  return (
    <main className="bg-neutral-50 dark:bg-neutral-950 min-h-screen pt-[100px] pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white mb-6">Privacy Policy</h1>
        <p className="text-neutral-500 dark:text-neutral-400 mb-12">Last updated: August 2025</p>

        <div className="space-y-8 text-neutral-600 dark:text-neutral-300">
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect information that you provide directly to us when using our services. This may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information such as name, email address (e.g., when you email us at rayyanabrar76@gmail.com).</li>
              <li>Information provided during the quote process or when communicating with us.</li>
              <li>Payment and billing information processed securely via our payment providers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services and products.</li>
              <li>Process transactions and send related information.</li>
              <li>Respond to your comments, questions, and requests.</li>
              <li>Communicate with you about products, services, and events offered by Limitlessly.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">3. Third-Party Services & Cookies</h2>
            <p className="mb-4">We may use third-party services that collect, monitor and analyze data. These include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Vercel Analytics:</strong> Used to track website performance and visitor analytics anonymously.</li>
              <li><strong>EmailJS:</strong> Used to process contact form submissions.</li>
              <li><strong>Calendly:</strong> Used for scheduling consultation calls.</li>
            </ul>
            <p className="mt-4">These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">4. Data Retention</h2>
            <p>We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">5. User Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal data, including the right to access, update, or delete the information we have on you. Please contact us to exercise these rights.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">6. Children's Privacy</h2>
            <p>Our services are not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you become aware that a child has provided us with personal data, please contact us.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">7. Changes to This Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:rayyanabrar76@gmail.com" className="text-indigo-500 hover:underline">rayyanabrar76@gmail.com</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
