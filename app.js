const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const nunjucks = require('nunjucks');
const connectDB = require('./config/db');
const customerRoutes = require('./routes/api/customerRoutes');

dotenv.config();
connectDB();

const app = express();

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use(
  '/datatables/js',
  express.static(__dirname + '/node_modules/datatables.net/js')
);
app.use(
  '/datatables/css',
  express.static(__dirname + '/node_modules/datatables.net-dt/css')
);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/customers', customerRoutes);

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true,
});
const customerViewRoutes = require("./routes/web/customerRoutes");
app.use("/customers", customerViewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
