import React from "react";

const ConfirmModal = ({ hanldeOrderCancel, orderID }) => {
    return (
        <>
            {/* // <!-- Put this part before </body> tag --> */}
            <input
                type="checkbox"
                id="order-cancel-modal"
                className="modal-toggle"
            />
            <div className="modal modal-bottom  sm:modal-middle">
                <div className="modal-box">
                    <h3 className="text-xl  text-primary font-semibold text-center">
                        Are you sure want to Cancel Order?
                    </h3>
                    <div className="flex justify-center items-center mt-3">
                        <label
                            htmlFor="order-cancel-modal"
                            className="btn btn-xs btn-error text-base-100 font-light px-4 mr-4"
                            onClick={() => hanldeOrderCancel(orderID)}
                        >
                            YES
                        </label>
                        <label
                            htmlFor="order-cancel-modal"
                            className="btn btn-xs btn-success text-base-200 font-light px-4"
                        >
                            NO
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConfirmModal;
