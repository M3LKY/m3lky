import Link from "next/link";
import React from "react";
import { FiGithub } from "react-icons/fi";

function Button({ link, text }: {link: string, text: string})  {
  return (
    <Link className="btn" href={link} target="blank">
                  {text}
    </Link>
  );
}

export default Button;
