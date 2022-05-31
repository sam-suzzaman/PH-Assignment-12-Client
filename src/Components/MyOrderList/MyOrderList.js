import React from "react";

const MyOrderList = ({ order, indexValue, hanldeOrderCancel }) => {
    const {
        _id,
        orderID,
        orderTitle,
        orderPhoto,
        orderPricePerUnit,
        orderOwner,
        orderEmail,
        address,
        phoneNumber,
        orderQuantity,
    } = order;

    return (
        <tr>
            <th className="text-center">{indexValue + 1}</th>
            <td className="text-center">
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={orderPhoto} alt="product" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{orderTitle}</div>
                        <div className="text-sm opacity-50">{orderOwner}</div>
                    </div>
                </div>
            </td>
            <td className="text-center">
                {address}
                <br />
                <span className="badge badge-ghost badge-sm text-base-100 text-sm">
                    {phoneNumber}
                </span>
            </td>
            <td className="text-center">{orderQuantity}</td>
            <th className="text-center">
                <button className="btn btn-secondary btn-xs text-neutral font-semibold mr-2">
                    payment
                </button>
                <button
                    className="btn btn-error btn-xs text-base-100 font-semibold"
                    onClick={() => hanldeOrderCancel(orderID)}
                >
                    cancel
                </button>
            </th>
        </tr>
    );
};

export default MyOrderList;
