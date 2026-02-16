import { motion } from 'framer-motion';
import { Share2, Download, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export const Socials = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const brandColors = [
    { name: 'Primary Indigo', hex: '#6366f1', description: 'Used for main actions and primary branding.' },
    { name: 'Secondary Rose', hex: '#fb7185', description: 'Used for accents and highlights.' },
    { name: 'Dark Teal', hex: '#0d2c2d', description: 'Used for deep backgrounds and contrast.' },
    { name: 'Deep Navy', hex: '#1d2f58', description: 'Used for secondary backgrounds and text.' },
  ];

  const socialTags = [
    { label: 'Instagram / X (Twitter)', tag: '@techstackconf2026' },
    { label: 'Facebook / LinkedIn', tag: 'TechStackConference' },
  ];

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Social Kit
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Help us spread the word about TechStack Conference 2026. Use our official branding materials and social tags.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Logo Section */}
        <section className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <Share2 className="text-primary-600 h-6 w-6" />
            <h2 className="text-2xl font-bold">Official Logo</h2>
          </div>
          <div className="bg-slate-50 dark:bg-slate-950 p-12 rounded-xl flex items-center justify-center mb-6">
            <img src="/logo.svg" alt="TechStack Logo" className="w-48 h-48" />
          </div>
          <div className="flex gap-4">
            <a
              href="/logo.svg"
              download
              className="flex-1 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              <Download className="h-4 w-4" /> Download SVG
            </a>
          </div>
        </section>

        {/* Social Tags Section */}
        <section className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <Share2 className="text-primary-600 h-6 w-6" />
            <h2 className="text-2xl font-bold">Social Handles</h2>
          </div>
          <div className="space-y-4">
            {socialTags.map((item) => (
              <div key={item.tag} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-950 rounded-xl">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                  <p className="text-lg font-mono font-bold text-slate-900 dark:text-white">{item.tag}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(item.tag, item.tag)}
                  className="p-2 text-slate-400 hover:text-primary-600 transition-colors"
                >
                  {copied === item.tag ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Brand Colors Section */}
        <section className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 lg:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-primary-600 to-secondary-400" />
            <h2 className="text-2xl font-bold">Brand Palette</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandColors.map((color) => (
              <div key={color.hex} className="space-y-3">
                <div
                  className="h-24 w-full rounded-xl shadow-inner border border-slate-200 dark:border-slate-800"
                  style={{ backgroundColor: color.hex }}
                />
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 dark:text-white">{color.name}</h3>
                    <button
                      onClick={() => copyToClipboard(color.hex, color.hex)}
                      className="text-xs text-slate-400 hover:text-primary-600 uppercase"
                    >
                      {copied === color.hex ? 'Copied!' : 'Copy HEX'}
                    </button>
                  </div>
                  <p className="text-xs font-mono text-slate-500 mt-1">{color.hex}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">{color.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography Section */}
        <section className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold">Typography</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Primary Font</p>
              <p className="text-6xl font-bold text-slate-900 dark:text-white mb-4">Inter</p>
              <p className="text-slate-600 dark:text-slate-400">
                A modern, clean sans-serif font designed for screens. Inter provides excellent readability across all devices.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl space-y-4">
              <p className="text-4xl font-black">Aa Bb Cc Dd</p>
              <p className="text-2xl font-semibold italic">The quick brown fox jumps over the lazy dog.</p>
              <p className="text-sm leading-relaxed text-slate-500">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                abcdefghijklmnopqrstuvwxyz<br />
                1234567890 !@#$%^&*()
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};