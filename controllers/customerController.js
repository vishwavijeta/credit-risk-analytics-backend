let customers = require('../data/customers');

const getCustomers = (req, res) => {
    res.json(customers);
};

const updateStatus = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    customers = customers.map(customer =>
        customer.customerId === id ? { ...customer, status } : customer
    );

    res.status(200).json({ message: `Status for ${id} updated to ${status}` });
};

const postAlert = (req, res) => {
    const { customerId, riskScore } = req.body;

    console.log(`🚨 ALERT: Customer ${customerId} has a high risk score of ${riskScore}`);
    res.status(200).json({ message: 'Alert received and logged' });
};

module.exports = {
    getCustomers,
    updateStatus,
    postAlert
};
