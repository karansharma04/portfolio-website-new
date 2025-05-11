"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { AtSign, Send, Mail, Github, Linkedin, Code } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message must not exceed 500 characters." }),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully!");
      form.reset();
    }, 1500);
  }

  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-screen-lg mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 inline-block relative">
            Get In Touch
            <span className="absolute bottom-0 left-0 h-1 w-12 bg-gradient-to-r from-cyan-500 to-purple-500"></span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Card className="bg-card/60 backdrop-blur-sm border overflow-hidden">
                <CardHeader>
                  <CardTitle>Contact Me</CardTitle>
                  <CardDescription>
                    Fill out the form and I&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Your message"
                                rows={5}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
                            <span>Sending...</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Send size={16} />
                            <span>Send Message</span>
                          </div>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col justify-center space-y-8"
            >
              <div>
                <h3 className="text-xl font-bold mb-4 font-fira-code">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <Mail size={18} className="text-cyan-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:karanrajsharma43@gmail.com" className="font-medium hover:text-cyan-500 transition-colors">
                        karanrajsharma43@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <AtSign size={18} className="text-purple-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Social</p>
                      <div className="flex gap-4 mt-2">
                        <a
                          href="https://github.com/karansharma04"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-cyan-500 transition-colors"
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href="https://linkedin.com/in/karansharma04"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-cyan-500 transition-colors"
                        >
                          <Linkedin size={20} />
                        </a>
                        <a
                          href="https://codeforces.com/profile/_karan"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-cyan-500 transition-colors"
                        >
                          <Code size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 font-fira-code">My Coding Profiles</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="https://codeforces.com/profile/_karan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-lg border bg-card/40 hover:bg-card/80 transition-colors hover:border-cyan-500/50 flex items-center gap-3"
                  >
                    <Code size={24} className="text-cyan-500" />
                    <div>
                      <p className="font-medium">Codeforces</p>
                      <p className="text-xs text-muted-foreground">Rating: 1956</p>
                    </div>
                  </a>
                  
                  <a
                    href="https://www.codechef.com/users/karan_04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-lg border bg-card/40 hover:bg-card/80 transition-colors hover:border-cyan-500/50 flex items-center gap-3"
                  >
                    <Code size={24} className="text-yellow-500" />
                    <div>
                      <p className="font-medium">CodeChef</p>
                      <p className="text-xs text-muted-foreground">Rating: 2132</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}