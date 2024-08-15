import React from "react";

const CategoryListSection = () => {
  return (
    <div>
      <ul className="font-poppins">
        <li className="flex items-center gap-4 px-4 py-1">
          <div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0">
            <h4 className="text-sm text-slate-700 ">Woman’s Fashion</h4>
          </div>
          {/* <div className="text-xs text-slate-400">100+</div> */}
        </li>
        <li className="flex items-center gap-4 px-4 py-1">
          <div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0">
            <h4 className="text-sm text-slate-700 ">Men’s Fashion</h4>
          </div>
          {/* <div className="text-xs text-slate-400">48</div> */}
        </li>
        <li className="flex items-center gap-4 px-4 py-1">
          <div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0">
            <h4 className="text-sm text-slate-700 ">Electronics</h4>
          </div>
          {/* <div className="text-xs text-slate-400">31</div> */}
        </li>
        <li className="flex items-center gap-4 px-4 py-1">
          <div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0">
            <h4 className="text-sm text-slate-700 ">Home & Lifestyle</h4>
          </div>
          {/* <div className="text-xs text-slate-400">17</div> */}
        </li>
        <li className="flex items-center gap-4 px-4 py-1">
          <div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0">
            <h4 className="text-sm text-slate-700 ">Medicine</h4>
          </div>
          {/* <div className="text-xs text-slate-400">4</div> */}
        </li>
        <li className="flex items-center gap-4 px-4 py-1">
          <div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0">
            <h4 className="text-sm text-slate-700 ">Sports & Outdoor</h4>
          </div>
          {/* <div className="text-xs text-slate-400">4</div> */}
        </li>
        <li className="flex items-center gap-4 px-4 py-1">
          <div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0">
            <h4 className="text-sm text-slate-700 ">Baby’s & Toys</h4>
          </div>
          {/* <div className="text-xs text-slate-400">4</div> */}
        </li>
        <li className="flex items-center gap-4 px-4 py-1">
          <div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0">
            <h4 className="text-sm text-slate-700 ">Groceries & Pets</h4>
          </div>
          {/* <div className="text-xs text-slate-400">4</div> */}
        </li>
        <li className="flex items-center gap-4 px-4 py-1">
          <div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0">
            <h4 className="text-sm text-slate-700 ">Health & Beauty</h4>
          </div>
          {/* <div className="text-xs text-slate-400">4</div> */}
        </li>
      </ul>
    </div>
  );
};

export default CategoryListSection;
