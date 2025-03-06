import React from "react";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
import styles from "@/styles/menu.module.css";

const CategoryCard = ({
  label,
  icon,
  isActive,
  onClick,
  activeBgStart,
  activeBgEnd,
  categoryBg,
}) => {
  const router = useRouter();

  const handleClick = () => {
    // If an external onClick is provided, call it first
      onClick();
      //  redirect to the category page based on label
      router.push(`/category/${label.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <div
      className={cn(["rounded-lg h-14 p-2 relative", styles.category])}
      style={{
        "--active-bg-start": activeBgStart,
        "--active-bg-end": activeBgEnd,
        "--category-bg": categoryBg,
      }}
      data-active={isActive}
      onClick={handleClick}
    >
      <div className="absolute right-2.5 bottom-3.5">{icon}</div>
      <div className="absolute left-2.5 bottom-2.5">
        <div className="font-medium">{label}</div>
      </div>
    </div>
  );
};

export default CategoryCard;
