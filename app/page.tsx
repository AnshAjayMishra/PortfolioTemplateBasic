"use client";
import Image from "next/image";
import pp from "../public/pp11.jpg";
import pp1 from "../public/pp1.png";
import pp2 from "../public/pp2.png";
import pp3 from "../public/pp3.png";
import pp4 from "../public/pp4.png";
import pp5 from "../public/pp5.png";
import pp6 from "../public/pp6.png";
import ThemeToggle from "@/components/ui/theme-toggle";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <motion.header
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-12"
        >
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image
              src={pp}
              alt="pp"
              className="cursor-pointer transition-all duration-300 hover:scale-110"
            />
          </div>
          <ThemeToggle />
        </motion.header>

        <main className="space-y-10">
          <section className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-1"
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to sky-500 bg-clip-text text-transparent inline-block">
                Ansh Ajay Mishra
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {" "}
                Fullstack Web developer & Flutter Developer
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Indore (MP) ,India
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-3"
            >
              <h2 className="text-lg font-semibold">
                Creating Solution for Tomorrow
              </h2>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                Lorem ipsum dolor sit amet consectetur{" "}
                <span className="text-black dark:text-white">adipisicing</span>{" "}
                elit. Debitis provident sit facere quibusdam enim{" "}
                <span className="text-black dark:text-white">temporibus</span>{" "}
                quasi perspiciatis. Molestias non assumenda{" "}
              </p>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur laudantium delectus, tempora voluptatibus quisquam
                rem nostrum. Soluta facere, repellat laudantium aliquid, hic,
                mollitia non similique pariatur quos nesciunt eos excepturi.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex item-center gap-3"
            >
              <Button className="rounded-full bg-gradient-to-r from-rose-700 to-indigo-600 text-white transition-transform hover:scale-105">
                Resume
              </Button>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>

              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaYoutube className="w-6 h-6" />
              </Link>
            </motion.div>
          </section>

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-500 via-indigo-500 to-sky-500 bg-clip-text text-transparent ">
              Experience
            </h2>
            <div className="space-y-2">
              <div className="flex item-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {" "}
                    July, 2024- Present
                  </p>
                  <p className="font-medium"> System Engineer</p>
                  <p className="text-blue-600 fark:text-blue-400">CompanyX</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                With experience in various fields, I’ve developed strong skills
                in problem-solving, project management, and teamwork. I thrive
                in dynamic environments and am committed to continuous growth
                and learning.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex item-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {" "}
                    July, 2022- July, 2024
                  </p>
                  <p className="font-medium"> System Engineer</p>
                  <p className="text-blue-600 fark:text-blue-400">CompanyZ</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                With experience in various fields, I’ve developed strong skills
                in problem-solving, project management, and teamwork. I thrive
                in dynamic environments and am committed to continuous growth
                and learning.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex item-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {" "}
                    July, 2024- Present
                  </p>
                  <p className="font-medium"> System Engineer</p>
                  <p className="text-blue-600 fark:text-blue-400">CompanyX</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                With experience in various fields, I’ve developed strong skills
                in problem-solving, project management, and teamwork. I thrive
                in dynamic environments and am committed to continuous growth
                and learning.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-500 via-indigo-500 to-sky-500 bg-clip-text text-transparent ">
              Education
            </h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    July,2022 - 2026
                  </p>
                  <p className="font-medium">Computer Science & Engineering</p>
                  <p className="text-blue-600 dark:text-blue-400">RGPV</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                I am pursuing a B.Tech in Computer Science and Engineering, with
                a strong foundation in programming, algorithms, data structures,
                web development, and software engineering. I’m passionate about
                tech innovation and continuous learning.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    July,2022 - 2026
                  </p>
                  <p className="font-medium">Computer Science & Engineering</p>
                  <p className="text-blue-600 dark:text-blue-400">RGPV</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                I am pursuing a B.Tech in Computer Science and Engineering, with
                a strong foundation in programming, algorithms, data structures,
                web development, and software engineering. I’m passionate about
                tech innovation and continuous learning.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    July,2022 - 2026
                  </p>
                  <p className="font-medium">Computer Science & Engineering</p>
                  <p className="text-blue-600 dark:text-blue-400">RGPV</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                I am pursuing a B.Tech in Computer Science and Engineering, with
                a strong foundation in programming, algorithms, data structures,
                web development, and software engineering. I’m passionate about
                tech innovation and continuous learning.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-500 via-indigo-500 to-sky-500 bg-clip-text text-transparent ">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image
                    src={pp1}
                    alt="Project1"
                    className="rounded-lg mb-4"
                  ></Image>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Project1</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Next.Js, MySql, Drizzle
                      </p>
                    </div>
                    <Button variant="ghost" size="icon">
                      →
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image
                    src={pp2}
                    alt="Project1"
                    className="rounded-lg mb-4"
                  ></Image>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Project1</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Next.Js, MySql, Drizzle
                      </p>
                    </div>
                    <Button variant="ghost" size="icon">
                      →
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image
                    src={pp3}
                    alt="Project1"
                    className="rounded-lg mb-4"
                  ></Image>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Project1</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Next.Js, MySql, Drizzle
                      </p>
                    </div>
                    <Button variant="ghost" size="icon">
                      →
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image
                    src={pp4}
                    alt="Project1"
                    className="rounded-lg mb-4"
                  ></Image>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Project1</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Next.Js, MySql, Drizzle
                      </p>
                    </div>
                    <Button variant="ghost" size="icon">
                      →
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image
                    src={pp5}
                    alt="Project1"
                    className="rounded-lg mb-4"
                  ></Image>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Project1</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Next.Js, MySql, Drizzle
                      </p>
                    </div>
                    <Button variant="ghost" size="icon">
                      →
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image
                    src={pp6}
                    alt="Project1"
                    className="rounded-lg mb-4"
                  ></Image>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Project1</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Next.Js, MySql, Drizzle
                      </p>
                    </div>
                    <Button variant="ghost" size="icon">
                      →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="text-gray-500 text-xs">
              Build with NextJs | 🖤 By AnshAjayMishra
            </p>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
