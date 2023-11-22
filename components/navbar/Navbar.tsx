import Link from "next/link";
import Image from "next/image";
import CustomButton from "@/components/customButton/CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w[1440px] mx-auto flex items-center justify-between sm:px-16 px-6 py-4">
          <Link href="/" className="flex justify-center item-center">
            <Image src="/logo.svg" alt="Barter Buddy Logo" width={118} height={18}
            className="object-contain"/>
          </Link>
          <CustomButton
              title="Sign In"
              btnType="button"
              containerStyles="bg-primary-blue bg-white rounded-full min-w-[130px]"
          />
      </nav>
    </header>
  )
}

export default Navbar;
