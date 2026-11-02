/**
 * @typedef {Object} Order
 * @property {string} id
 * @property {{ name: string, email: string } | null} customer
 * @property {{ status: "paid" | "unpaid" } | null} payment
 * @property {{ status: "shipped" | "processing", estimatedDelivery: string } | null} shipping
 * @property {Array<{ name: string, quantity: number }> | []} items
 */

/**
 * Check whether the order payment status is paid.
 *
 * @param {Order} order
 * @returns {boolean}
 */
function isPaid(order) {
  return order.payment?.status === "paid";
}

/**
 * Check whether the order shipping status is shipped.
 *
 * @param {Order} order
 * @returns {boolean}
 */
function hasShipped(order) {
  return order.shipping?.status === "shipped";
}

/**
 * Get delivery status message with estimated delivery date if shipped.
 *
 * @param {Order} order
 * @returns {string}
 */
function getDeliveryMessage(order) {
  if (hasShipped(order)) {
    return `Order shipped. Estimated delivery: ${order.shipping?.estimatedDelivery}.`;
  }

  return "Order has not shipped yet.";
}

/**
 * Check whether the order requires attention (unpaid or not shipped).
 *
 * @param {Order} order
 * @returns {boolean}
 */
function needsAttention(order) {
  return !isPaid(order) || !hasShipped(order);
}

/**
 * Generate a complete dashboard summary for the order.
 *
 * @param {Order} order
 * @returns {{ id: string, customerName: string, paid: boolean, shipped: boolean, itemCount: number, deliveryMessage: string, needsAttention: boolean }}
 */
function createOrderSummary(order) {
  return {
    id: order.id,
    customerName: order.customer?.name,
    paid: isPaid(order),
    shipped: hasShipped(order),
    itemCount: order.items?.reduce((acc, item) => acc + item.quantity, 0),
    deliveryMessage: getDeliveryMessage(order),
    needsAttention: needsAttention(order),
  };
}

const order = {
  id: "ORD-1001",
  customer: {
    name: "Ava Stone",
    email: "ava@example.com",
  },
  payment: {
    status: "paid",
  },
  shipping: {
    status: "shipped",
    estimatedDelivery: "2026-06-18",
  },
  items: [
    { name: "Notebook", quantity: 2 },
    { name: "Pen Set", quantity: 1 },
  ],
};

console.log(createOrderSummary(order));
console.log(isPaid(order));
console.log(hasShipped(order));

const pendingOrder = {
  ...order,
  payment: { status: "unpaid" },
  shipping: { status: "processing", estimatedDelivery: "2026-06-18" },
};
console.log(needsAttention(pendingOrder));
console.log(getDeliveryMessage(pendingOrder));
