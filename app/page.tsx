"use client"

import { useState, useRef, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { motion } from "framer-motion"
import { ChevronDown, Upload, MessageSquare, Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// 3D Model Component
function ChillGridModel() {
  return (
    <group position={[0, 0, 0]} scale={[1, 1, 1]}>
      {/* Terracotta grid representation */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 3, 0.2]} />
        <meshStandardMaterial color="#D95D39" roughness={0.7} metalness={0.1} />
      </mesh>

      {/* Grid pattern */}
      {Array.from({ length: 5 }).map((_, i) =>
        Array.from({ length: 4 }).map((_, j) => (
          <mesh key={`${i}-${j}`} position={[-1.6 + i * 0.8, -1.2 + j * 0.8, 0.15]} castShadow>
            <boxGeometry args={[0.7, 0.7, 0.1]} />
            <meshStandardMaterial color="#C04B2C" roughness={0.8} metalness={0.1} />
          </mesh>
        )),
      )}

      {/* Wall mount representation */}
      <mesh position={[0, 0, -0.15]} receiveShadow>
        <boxGeometry args={[4.2, 3.2, 0.1]} />
        <meshStandardMaterial color="#e0e0e0" roughness={0.5} />
      </mesh>
    </group>
  )
}

// Hero Section
const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-amber-50 to-white">
      <div className="container px-4 mx-auto z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-6">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#D95D39]">ChillGrid</span> – The Natural Elegance of Terracotta Cooling
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience sustainable cooling with our premium terracotta grid system. Eco-friendly, energy-efficient, and
            beautifully designed for modern spaces.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="bg-[#D95D39] hover:bg-[#C04B2C] text-white">
              <Upload className="mr-2 h-4 w-4" /> Upload Your Design
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#3AAFA9] text-[#3AAFA9] hover:bg-[#3AAFA9] hover:text-white"
            >
              <MessageSquare className="mr-2 h-4 w-4" /> Need Design Help?
            </Button>
          </motion.div>
        </div>
        <div className="lg:w-1/2 h-[400px] lg:h-[500px]">
          <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight
              position={[10, 10, 5]}
              intensity={1}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <Suspense fallback={null}>
              <ChillGridModel />
              <Environment preset="sunset" />
              <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={0.5}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 2}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-gray-500" />
      </div>
    </section>
  )
}

// How It Works Section
const HowItWorks = () => {
  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How ChillGrid Works</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Passive Cooling Technology",
              description:
                "ChillGrid uses terracotta's natural properties to absorb heat and release moisture, creating a cooling effect without electricity.",
              icon: (
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-[#D95D39]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              ),
            },
            {
              title: "Simple Installation",
              description:
                "Designed for easy mounting on any wall. Our modular system adapts to your space with minimal tools required.",
              icon: (
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-[#D95D39]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              ),
            },
            {
              title: "Eco-Friendly Benefits",
              description:
                "Reduce energy consumption by up to 30%. Made from sustainable materials with minimal environmental impact.",
              icon: (
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-[#D95D39]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
              ),
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Pricing Section
const Pricing = () => {
  return (
    <section className="py-20 bg-amber-50" id="pricing">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Simple, Transparent Pricing</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 border-[#D95D39]/20 hover:border-[#D95D39] transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-[#D95D39]">Installation</CardTitle>
              <CardDescription>Complete setup for your space</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-6">Starting at RM 499</div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-[#3AAFA9] mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Professional installation</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-[#3AAFA9] mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom sizing for your space</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-[#3AAFA9] mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>All mounting hardware included</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-[#3AAFA9] mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>1-year installation warranty</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#D95D39] hover:bg-[#C04B2C]">Get Started</Button>
            </CardFooter>
          </Card>

          <Card className="border-2 border-[#3AAFA9]/20 hover:border-[#3AAFA9] transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-[#3AAFA9]">Maintenance</CardTitle>
              <CardDescription>Keep your ChillGrid performing optimally</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-6">RM 250/year</div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-[#D95D39] mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Bi-annual cleaning service</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-[#D95D39] mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Performance check and optimization</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-[#D95D39] mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-[#D95D39] mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Discounted replacement parts</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#3AAFA9] hover:bg-[#2A9D8F]">Learn More</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

// Order Process Section
const OrderProcess = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0])
    }
  }

  return (
    <section className="py-20 bg-white" id="order">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Get Started with ChillGrid</h2>

        <Tabs defaultValue="upload" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="upload" className="text-lg py-3">
              Upload Your Design
            </TabsTrigger>
            <TabsTrigger value="help" className="text-lg py-3">
              Need Design Help?
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="border rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-6">Upload Your Design</h3>

            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center mb-6 ${selectedFile ? "border-green-500 bg-green-50" : "border-gray-300 hover:border-[#D95D39]"}`}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current.click()}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.dwg,.dxf,.png,.jpg,.jpeg"
              />

              {selectedFile ? (
                <div className="flex flex-col items-center">
                  <svg className="h-12 w-12 text-green-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-lg font-medium">{selectedFile.name}</p>
                  <p className="text-sm text-gray-500">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2 text-red-500 hover:text-red-700"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedFile(null)
                    }}
                  >
                    Remove
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <Upload className="h-12 w-12 text-gray-400 mb-2" />
                  <p className="text-lg font-medium">Drag and drop your file here</p>
                  <p className="text-sm text-gray-500 mb-2">or click to browse (PDF, CAD, PNG, JPEG)</p>
                  <Button variant="outline" size="sm">
                    Select File
                  </Button>
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email address" />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="Your phone number" />
                </div>
                <div>
                  <Label htmlFor="area">Surface Area (approx.)</Label>
                  <Input id="area" placeholder="e.g., 20 sq. meters" />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="project-details">Project Details</Label>
              <Textarea
                id="project-details"
                placeholder="Tell us more about your project, including location, timeline, and any special requirements."
                rows={4}
              />
            </div>

            <Button size="lg" className="w-full bg-[#D95D39] hover:bg-[#C04B2C]">
              Submit Design
            </Button>
          </TabsContent>

          <TabsContent value="help" className="border rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-6">Request Design Assistance</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="help-name">Name</Label>
                  <Input id="help-name" placeholder="Your full name" />
                </div>
                <div>
                  <Label htmlFor="help-email">Email</Label>
                  <Input id="help-email" type="email" placeholder="Your email address" />
                </div>
                <div>
                  <Label htmlFor="help-phone">Phone</Label>
                  <Input id="help-phone" placeholder="Your phone number" />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="space-type">Type of Space</Label>
                  <select
                    id="space-type"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select space type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="office">Office</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="aesthetic">Aesthetic Preference</Label>
                  <select
                    id="aesthetic"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select preference</option>
                    <option value="modern">Modern</option>
                    <option value="minimalist">Minimalist</option>
                    <option value="traditional">Traditional</option>
                    <option value="industrial">Industrial</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="climate">Climate Zone</Label>
                  <select
                    id="climate"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select climate</option>
                    <option value="tropical">Tropical</option>
                    <option value="dry">Dry/Arid</option>
                    <option value="temperate">Temperate</option>
                    <option value="continental">Continental</option>
                    <option value="polar">Polar</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="design-requirements">Design Requirements</Label>
              <Textarea
                id="design-requirements"
                placeholder="Describe your space, cooling needs, and any design preferences you have."
                rows={4}
              />
            </div>

            <Button size="lg" className="w-full bg-[#3AAFA9] hover:bg-[#2A9D8F]">
              Request Design Help
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

// Contact Section
const Contact = () => {
  return (
    <section className="py-20 bg-amber-50" id="contact">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Contact & Support</h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-[#D95D39]/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-[#D95D39]" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">011-3738 9873</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#D95D39]/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-[#D95D39]" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">info@chillgrid.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#D95D39]/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-[#D95D39]" />
                </div>
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-gray-600">
                    191, Jalan Impian Emas 59
                    <br />
                    Johor, Malaysia
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Our Team</h3>
              <p className="text-gray-600 mb-2">Baytech Team</p>
              <p className="text-gray-600">Innovative cooling solutions since 2018</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-4">
              <div>
                <Label htmlFor="contact-name">Name</Label>
                <Input id="contact-name" placeholder="Your name" />
              </div>

              <div>
                <Label htmlFor="contact-email">Email</Label>
                <Input id="contact-email" type="email" placeholder="Your email" />
              </div>

              <div>
                <Label htmlFor="contact-subject">Subject</Label>
                <Input id="contact-subject" placeholder="Message subject" />
              </div>

              <div>
                <Label htmlFor="contact-message">Message</Label>
                <Textarea id="contact-message" placeholder="Your message" rows={5} />
              </div>

              <Button className="w-full bg-[#D95D39] hover:bg-[#C04B2C]">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// WhatsApp Button
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/601137389873"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    </a>
  )
}

// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">ChillGrid</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Revolutionizing cooling with sustainable terracotta technology. Eco-friendly, energy-efficient, and
              beautifully designed for modern spaces.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-white">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#order" className="text-gray-400 hover:text-white">
                  Order
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Warranty
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Shipping Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ChillGrid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Main App
export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 py-4 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-[#D95D39]">
            ChillGrid
          </a>

          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-800 hover:text-[#D95D39]">
              Home
            </a>
            <a href="#how-it-works" className="text-gray-800 hover:text-[#D95D39]">
              How It Works
            </a>
            <a href="#pricing" className="text-gray-800 hover:text-[#D95D39]">
              Pricing
            </a>
            <a href="#order" className="text-gray-800 hover:text-[#D95D39]">
              Order
            </a>
            <a href="#contact" className="text-gray-800 hover:text-[#D95D39]">
              Contact
            </a>
          </nav>

          <Button className="bg-[#D95D39] hover:bg-[#C04B2C]">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      <main>
        <Hero />
        <HowItWorks />
        <Pricing />
        <OrderProcess />
        <Contact />
        <WhatsAppButton />
      </main>

      <Footer />
    </div>
  )
}
