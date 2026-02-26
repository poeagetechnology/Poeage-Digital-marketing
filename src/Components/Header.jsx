import React from "react";
import { Link,useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../Assets/Company_Logo.png";
import Button from "../Components/ui/Button";
import { useState,useEffect } from "react";
/* ---------------- MENU DATA ---------------- */

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/service" },
  { name: "Pricing", path: "/pricing" },
  { name: "Solutions", path: "/solutions" },
  { name: "Insights", path: "/insights" },
  { name: "Contact", path: "/contact" },
];
   
/* ---------------- REUSABLE NAV LINK ---------------- */

function NavLinkItem({ item, onClick }) {
  return (
    <Link
      to={item.path}
      onClick={onClick}
      className="relative group"
    >
      <span className="group-hover:text-blue-800 transition">
        {item.name}
      </span>
      <span className="absolute left-1/2 -bottom-2 w-0 h-0.5 bg-blue-800 transition-all group-hover:w-full group-hover:left-0"></span>
    </Link>
  );
}


  
/* ---------------- REUSABLE CTA ---------------- */

function HeaderCTA() {
  return (
    <div className="hidden md:flex items-center gap-4">
      <Link
        to="/contact"
        className="text-sm font-medium text-gray-600 hover:text-blue-800 transition"
      >
        Talk to Sales
      </Link>

      <Link to="/contact">
        <Button size="sm">Get Proposal</Button>
      </Link>
    </div>
  );
}

/* ---------------- MOBILE DRAWER ---------------- */

function MobileDrawer({ open, setOpen }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40 md:hidden"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.28 }}
            className="fixed top-0 left-0 h-full w-72 bg-white z-50 border-r border-gray-200 md:hidden flex flex-col"
          >
            {/* Top */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <img src={Logo} alt="Poeage Logo" className="h-10" />
              <button
                onClick={() => setOpen(false)}
                className="text-gray-600 text-lg"
              >
                ✕
              </button>
            </div>

            {/* Menu */}
            <nav className="flex flex-col px-6 py-6 space-y-6 text-gray-800 text-base font-medium">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <NavLinkItem item={item} onClick={() => setOpen(false)} />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                >
                  <Button fullWidth>Get Proposal</Button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ---------------- MAIN HEADER ---------------- */

export default function Header() {
  const [open, setOpen] = useState(false);
   const location = useLocation();



  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);


  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header className="w-full bg-white fixed top-0 left-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={Logo} alt="Poeage Logo" className="h-11 object-contain" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-12 text-gray-700 text-sm font-medium">
          {menuItems.map((item) => (
            <NavLinkItem key={item.name} item={item} />
          ))}
        </nav>

        {/* CTA */}
        <HeaderCTA />

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          <motion.div animate={open ? "open" : "closed"} className="space-y-1">
            <motion.span
              className="block w-6 h-0.5 bg-gray-800"
              variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 6 } }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-gray-800"
              variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-gray-800"
              variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -6 } }}
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer open={open} setOpen={setOpen} />
    </header>
  );
}
