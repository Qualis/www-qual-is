import Container from "@/app/_components/container";
import { ContactModal } from "@/app/_components/modal/contact-modal";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-primary dark:bg-accent-3">
      <Container>
        <div className="py-12 flex flex-col lg:flex-row items-center justify-center">
          <h3 className="text-primary text-3xl lg:text-4xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-6 lg:mb-0 lg:pr-4 lg:w-1/2">
            Sean (SVO) Van Osselaer
          </h3>
          <div className="flex flex-col lg:flex-row justify-end lg:pl-4 lg:w-1/2">
            <ContactModal />
          </div>
        </div>
      </Container>
    </footer>
  );
}
