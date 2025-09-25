import Container from "@/app/_components/container";
import { ContactModal } from "@/app/_components/modal/contact-modal";
import SocialLinks from "./social-links";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-primary dark:bg-accent-3">
      <Container>
        <div className="py-12 flex flex-col lg:flex-row items-center justify-center">
          <h3 className="text-primary text-3xl lg:text-4xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-6 lg:mb-0 lg:pr-4 lg:w-1/2">
            <Link
              href="/svo"
              className="hover:text-accent-3 dark:hover:text-accent-1 transition-colors"
              aria-label="Sean Van Osselaer"
            >
              Sean Van Osselaer (SVO)
            </Link>
          </h3>
          <div className="flex flex-col lg:flex-row justify-end items-center space-y-4 lg:space-y-0 lg:space-x-4 lg:pl-4 lg:w-1/2">
            <SocialLinks />
            <ContactModal />
          </div>
        </div>
      </Container>
    </footer>
  );
}
