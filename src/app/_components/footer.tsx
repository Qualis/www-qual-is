import Container from "@/app/_components/container";
import { ContactModal } from "@/app/_components/modal/contact-modal";

export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-12 flex flex-col lg:flex-row items-center justify-center">
          <h3 className="text-3xl lg:text-4xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-6 lg:mb-0 lg:pr-4 lg:w-1/2">
            Sean (SVO) Van Osselaer
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://www.linkedin.com/in/5v0/"
              className="mx-2 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-2 px-8 lg:px-6 duration-200 transition-colors mb-4 lg:mb-0"
              target="_blank"
            >
              LinkedIn
            </a>
            <ContactModal />
            <a
              href="mailto:svo@qual.is"
              className="mx-2 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-2 px-8 lg:px-6 duration-200 transition-colors mb-4 lg:mb-0"
            >
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
