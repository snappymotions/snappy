"use client"

import React from "react";
import { Instagram, Linkedin, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f0c84d] text-[#121212] py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-sm">
              Join our newsletter
            </h4>
            <p className="text-sm opacity-80 max-w-xs">
              Leave us with your email to get updates from the studio
            </p>
            <div className="relative border-b border-black/20 pb-2">
              <input
                type="email"
                placeholder="name@example.com"
                className="bg-transparent border-none outline-none w-full placeholder:text-black/40 text-sm"
              />
              <button className="absolute right-0 top-0 text-lg">›</button>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-sm">
              Visit Us
            </h4>
            <address className="not-italic text-sm opacity-80 leading-relaxed">
              1st Floor,
              <br />
              96 Church Street,
              <br />
              Brighton, BN1 1UJ
            </address>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-sm">
              Contact Us
            </h4>
            <div className="space-y-1 text-sm opacity-80">
              <p>+44 (0) 1273 921 215</p>
              <p>
                <a
                  href="mailto:hello@buffmotion.com"
                  className="hover:underline"
                >
                  hello@buffmotion.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-end items-start lg:items-end">
            <div className="flex gap-4">
              <a className="p-2 hover:bg-black/10 rounded-full">
                <Linkedin size={20} />
              </a>
              <a className="p-2 hover:bg-black/10 rounded-full">
                <Instagram size={20} />
              </a>
              <a className="p-2 hover:bg-black/10 rounded-full font-bold text-sm">
                Bē
              </a>
              <a className="p-2 hover:bg-black/10 rounded-full">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold">
            © Buff Motion Limited · Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
