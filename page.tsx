'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Moon, Sun, Share2, Bookmark, ThumbsUp, ThumbsDown } from 'lucide-react'

const sections = [
  {
    title: "Mindfulness",
    links: [
      { name: "Decision making & Observer", href: "Decision making & Observer.html", description: "Explore the role of the observer in decision-making processes." },
      { name: "Dynamic Potentiality to Manifestation", href: "Dynamic Potentiality to Manifestation.html", description: "Understand the journey from potential to reality in quantum systems." },
      { name: "Energy Flow", href: "Energy Flow.html", description: "Visualize and comprehend energy flow in various systems." },
      { name: "Interactive 10th man", href: "Interactive 10th man.html", description: "Engage with the concept of the 10th man in decision theory." },
      { name: "Journey to