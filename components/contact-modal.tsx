"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

interface ContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
        })
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          budget: "",
          message: "",
        })
        onOpenChange(false)
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error sending email:", error)
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-slate-800 border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-slate-100">Get in Touch</DialogTitle>
          <DialogDescription className="text-slate-400">
            Fill out the form below and I'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-slate-200">
              Full Name <span className="text-teal-300">*</span>
            </Label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400 focus:border-teal-300 focus:ring-teal-300"
            />
          </div>

          {/* Email Address */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-200">
              Email Address <span className="text-teal-300">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400 focus:border-teal-300 focus:ring-teal-300"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-slate-200">
              Phone Number <span className="text-teal-300">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400 focus:border-teal-300 focus:ring-teal-300"
            />
          </div>

          {/* Estimated Budget */}
          <div className="space-y-2">
            <Label htmlFor="budget" className="text-slate-200">
              Estimated Budget
            </Label>
            <Input
              id="budget"
              name="budget"
              type="text"
              placeholder="e.g., ₹5,000 - ₹10,000"
              value={formData.budget}
              onChange={handleChange}
              className="bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400 focus:border-teal-300 focus:ring-teal-300"
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-slate-200">
              Your Message <span className="text-teal-300">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400 focus:border-teal-300 focus:ring-teal-300 resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-teal-300 text-slate-900 hover:bg-teal-400 font-medium transition-all duration-200"
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
