import Link from "next/link";
import React from "react";
import Image from "next/image";

const ProductList = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className="relative w-full h-80">
        <Image
          src="https://images.pexels.com/photos/26594049/pexels-photo-26594049/free-photo-of-national-palace-of-pena.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          fill
          sizes="25vw"
        />
      </Link>
    </div>
  );
};

export default ProductList;
