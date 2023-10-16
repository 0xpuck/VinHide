import img_redcar from '../img/redcar.png';
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function PrivacyContent() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className="mt-12 px-6 lg:px-32 sm:px-24">
      <div className="my-2">
        <h1 className="text-2xl font-bold my-4">Section 1.10.32 of “de Finibus Bonorum et Malorum”, written by Cicero in 45 BC
        </h1>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”</h1>
      </div>
      <div className="my-2">
        <h1 className="text-2xl font-bold my-4">Section 1.10.32 of “de Finibus Bonorum et Malorum”, written by Cicero in 45 BC
        </h1>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”</h1>
      </div>
      <div className="my-2">
        <h1 className="text-2xl font-bold my-4">Section 1.10.32 of “de Finibus Bonorum et Malorum”, written by Cicero in 45 BC
        </h1>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”</h1>
      </div>
      <div className="my-2">
        <h1 className="text-2xl font-bold my-4">Section 1.10.32 of “de Finibus Bonorum et Malorum”, written by Cicero in 45 BC
        </h1>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”</h1>
      </div>
      <div className="my-2">
        <h1 className="text-2xl font-bold my-4">Section 1.10.32 of “de Finibus Bonorum et Malorum”, written by Cicero in 45 BC
        </h1>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”</h1>
      </div>
      <div className="my-2">
        <h1 className="text-2xl font-bold my-4">Section 1.10.32 of “de Finibus Bonorum et Malorum”, written by Cicero in 45 BC
        </h1>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”</h1>
      </div>
      <div className="flex font-bold max-sm:block mt-10">
        <div className="sm:w-5/12">
          <img className="" src={img_redcar} alt="redcar"></img>
        </div>
        <div className="sm:w-7/12 sm:pl-8">
          <div className="py-5 border-b-2">
            <p className="text-3xl">Frequently Asked Questions</p>
          </div>
          <div className="max-sm:pl-3">
            <Fragment>
              <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                  Mauris id nibh eu fermentum mattis purus?
                </AccordionHeader>
                <AccordionBody>
                  <p className="font-light max-sm:pl-2">Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla.<br />Orci, dictumst nec aliquet id ullamcorper venenatis.</p>
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                  Eros imperdiet rhoncus?
                </AccordionHeader>
                <AccordionBody>
                  <p className="font-light max-sm:pl-2">We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making mistakes.
                    We&apos;re constantly trying to express ourselves and actualize our dreams.</p>
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                  Fames imperdiet quam fermentum?
                </AccordionHeader>
                <AccordionBody>
                  <p className="font-light max-sm:pl-2">We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making mistakes.
                    We&apos;re constantly trying to express ourselves and actualize our dreams.</p>
                </AccordionBody>
              </Accordion>
            </Fragment>
          </div>
        </div>
      </div>
    </div>
  )
}