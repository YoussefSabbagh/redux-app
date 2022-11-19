import { useSelector } from 'react-redux';

import { selectTotalAmount } from '../../features/CartSlice';

const CartSumary = () => {
  const totalAmount = useSelector(selectTotalAmount);

  return (
    <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
      <div className="flex items-center justify-between">
        <h1 className="text-base font-semibold uppercase">SubTotal</h1>
        <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">
          ${totalAmount}
        </h1>
      </div>
      <div className="grid items-center gap-2">
        <p className="text-sm font-medium text-center">
          Taxes and Shipping Will Calculate At Shipping
        </p>
        <button type="button" className="button-theme bg-theme-cart text-white">
          Check Out
        </button>
      </div>
    </div>
  );
};

export default CartSumary;
