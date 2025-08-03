import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl py-20 border-0 border-t-[1px] border-gray-100">
      <ul className="space-y-3 max-w-[550px] text-sm">
        <li className="text-[#848484]">
          Phone:
          <a className="text-[#f05b27]" href="tel:+919444666677">
            {" "}
            +91 9444666677
          </a>
        </li>
        <li className="text-[#848484]">
          Email:
          <a className="text-[#f05b27]" href="mail:life@amarahomes.in">
            {" "}
            life@amarahomes.in
          </a>
        </li>
        <li className="text-[#848484]">
          Address: Acropolis Ground Floor, 148 Dr. Radhakrishnan Salai,
          Mylapore,
        </li>
        <li className="text-[#848484]">Chennai 600004, Tamil Nadu, INDIA</li>
        <li className="text-[#f05b27] uppercase">A.R.FOUNDATIONS PVT.LTD.</li>
        <li>
          <Link
            href="privacy-policy.html"
            target="_blank"
            className="text-[#f05b27] text-[10px] uppercase"
          >
            Privacy policy
          </Link>
        </li>
      </ul>
    </footer>
  );
}
