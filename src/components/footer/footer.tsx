"use client";
import React from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import { footer } from "./config";
import { Button } from "../ui/button";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";
import comingSoonAnim from "../../../public/assets/lottie/developer.json";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
  useModal,
} from "../ui/animated-modal";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-border px-4 py-6 sm:flex-row md:px-6 sm:justify-between">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © {year} {config.author}. All rights reserved.
      </p>
      <SocialMediaButtons />
      <nav className="flex gap-4 sm:gap-6 z-10">
        {footer.map((link, index) => {
          const { title, href } = link;
          const isComingSoon =
            title.toLowerCase() === "blog" ||
            title.toLowerCase() === "newsletter";

          if (isComingSoon) {
            return (
              <Modal key={`modal_${index}`}>
                <ModalTrigger className="bg-transparent p-0 text-xs underline-offset-4 hover:underline">
                  <span className="p-0 h-auto text-xs">{title}</span>
                </ModalTrigger>
                <ComingSoonModal />
              </Modal>
            );
          }

          return (
            <Link
              className="text-xs underline-offset-4 hover:underline"
              href={href}
              key={`l_${index}`}
            >
              <Button variant={"link"} className="p-0 h-auto text-xs">
                {title}
              </Button>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}

const ComingSoonModal = () => {
  const { setOpen } = useModal();
  return (
    <ModalBody className="md:max-w-lg h-full">
      <ModalContent className="items-center gap-6 text-center">
      <Lottie
        animationData={comingSoonAnim}
        loop
        className="w-44 h-auto md:w-52 mx-auto -mt-16 -mb-4"
      />
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">
            Heads up! Fun stuff loading…
          </h3>
          <p className="text-sm text-muted-foreground">
            We&apos;re brewing the next drop—grab a coffee and stick around.
          </p>
        </div>
        <Button onClick={() => setOpen(false)} className="self-center">
          Got it
        </Button>
      </ModalContent>
    </ModalBody>
  );
};

export default Footer;
