const data = {
  canadaNonKiosk: [
    { "Sale Price": "0.00 - 99.99", price: "FREE" },
    { "Sale Price": "100.00 - 499.99", price: 29 },
    { "Sale Price": "500.00 - 999.99", price: 39 },
    { "Sale Price": "1,000.00 - 1,499.99", price: 59 },
    { "Sale Price": "1,500.00 - 1,999.99", price: 69 },
    { "Sale Price": "2,000.00 - 3,999.99", price: 79 },
    { "Sale Price": "4,000.00 - 5,999.99", price: 89 },
    { "Sale Price": "6,000.00 - 7,999.99", price: 99 },
    {
      "Sale Price": "8000.00 - 10,000,000.00",
      price: 119,
    },
  ],
  canadaOnlineBid: [
    { "Sale Price": "0.00 - 99.99", price: "FREE" },
    { "Sale Price": "100.00 - 499.99", price: 39 },
    { "Sale Price": "500.00 - 999.99", price: 49 },
    { "Sale Price": "1,000.00 - 1,499.99", price: 69 },
    { "Sale Price": "1,500.00 - 1,999.99", price: 79 },
    { "Sale Price": "2,000.00 - 3,999.99", price: 89 },
    { "Sale Price": "4,000.00 - 5,999.99", price: 99 },
    { "Sale Price": "6,000.00 - 7,999.99", price: 119 },
    { "Sale Price": "8000.00 - 10,000,000.00", price: 129 },
  ],
  canada: [
    {
      "Sale Price Range": "0.01 - 49.99",
      "Secured Funds Fees": 1,
      "Non-Secured Funds Fees": 27.5,
    },
    {
      "Sale Price Range": "50.00 - 99.99",
      "Secured Funds Fees": 1,
      "Non-Secured Funds Fees": 40,
    },
    {
      "Sale Price Range": "100.00 - 199.99",
      "Secured Funds Fees": 25,
      "Non-Secured Funds Fees": 65,
    },
    {
      "Sale Price Range": "200.00 - 299.99",
      "Secured Funds Fees": 50,
      "Non-Secured Funds Fees": 90,
    },
    {
      "Sale Price Range": "300.00 - 399.99",
      "Secured Funds Fees": 75,
      "Non-Secured Funds Fees": 110,
    },
    {
      "Sale Price Range": "400.00 - 499.99",
      "Secured Funds Fees": 110,
      "Non-Secured Funds Fees": 130,
    },
    {
      "Sale Price Range": "500.00 - 599.99",
      "Secured Funds Fees": 125,
      "Non-Secured Funds Fees": 150,
    },
    {
      "Sale Price Range": "600.00 - 699.99",
      "Secured Funds Fees": 140,
      "Non-Secured Funds Fees": 170,
    },
    {
      "Sale Price Range": "700.00 - 799.99",
      "Secured Funds Fees": 155,
      "Non-Secured Funds Fees": 190,
    },
    {
      "Sale Price Range": "800.00 - 899.99",
      "Secured Funds Fees": 170,
      "Non-Secured Funds Fees": 210,
    },
    {
      "Sale Price Range": "900.00 - 999.99",
      "Secured Funds Fees": 185,
      "Non-Secured Funds Fees": 230,
    },
    {
      "Sale Price Range": "1,000.00 - 1,199.99",
      "Secured Funds Fees": 200,
      "Non-Secured Funds Fees": 255,
    },
    {
      "Sale Price Range": "1,200.00 - 1,399.99",
      "Secured Funds Fees": 225,
      "Non-Secured Funds Fees": 290,
    },
    {
      "Sale Price Range": "1,400.00 - 1,599.99",
      "Secured Funds Fees": 250,
      "Non-Secured Funds Fees": 315,
    },
    {
      "Sale Price Range": "1,600.00 - 1,799.99",
      "Secured Funds Fees": 275,
      "Non-Secured Funds Fees": 345,
    },
    {
      "Sale Price Range": "1,800.00 - 1,999.99",
      "Secured Funds Fees": 300,
      "Non-Secured Funds Fees": 375,
    },
    {
      "Sale Price Range": "2,000.00 - 2,499.99",
      "Secured Funds Fees": 325,
      "Non-Secured Funds Fees": 415,
    },
    {
      "Sale Price Range": "2,500.00 - 2,999.99",
      "Secured Funds Fees": 350,
      "Non-Secured Funds Fees": 455,
    },
    {
      "Sale Price Range": "3,000.00 - 4,999.99",
      "Secured Funds Fees": 400,
      "Non-Secured Funds Fees": 565,
    },
    {
      "Sale Price Range": "5,000.00 - 7,499.99",
      "Secured Funds Fees": 425,
      "Non-Secured Funds Fees": 665,
    },
    {
      "Sale Price Range": "7,500.00 - 9,999.99",
      "Secured Funds Fees": 450,
      "Non-Secured Funds Fees": 765,
    },
    {
      "Sale Price Range": "10,000.00 - 14,999.99",
      "Secured Funds Fees": 500,
      "Non-Secured Funds Fees": 970,
    },
    {
      "Sale Price Range": "15,000.00 - 19,999.99",
      "Secured Funds Fees": 550,
      "Non-Secured Funds Fees": 1175,
    },
    {
      "Sale Price Range": "20,000.00 - 24,999.99",
      "Secured Funds Fees": 600,
      "Non-Secured Funds Fees": 1375,
    },
    {
      "Sale Price Range": "25,000.00 - 29,999.99",
      "Secured Funds Fees": 650,
      "Non-Secured Funds Fees": 1575,
    },
    {
      "Sale Price Range": "30,000.00 - 34,999.99",
      "Secured Funds Fees": 700,
      "Non-Secured Funds Fees": 1775,
    },
    {
      "Sale Price Range": "35,000.00 - 9,999,999.99",
      "Secured Funds Fees": 0.02,
      "Non-Secured Funds Fees": 0.05,
    },
    // {
    //   "Sale Price Range": "Homeowners Items",
    //   "Secured Funds Fees": 0.2,
    //   "Non-Secured Funds Fees": 0.25,
    // },
  ],
  crashedToys: [
    {
      "Sale Price Range": "0.01 - 49.99",
      "Fee A": 30,
      "Fee B": 32.5,
      "Fee C": 50,
      "Fee D": 52.5,
    },
    {
      "Sale Price Range": "50.00 - 99.99",
      "Fee A": 45,
      "Fee B": 50,
      "Fee C": 65,
      "Fee D": 70,
    },
    {
      "Sale Price Range": "100.00 - 199.99",
      "Fee A": 70,
      "Fee B": 80,
      "Fee C": 90,
      "Fee D": 100,
    },
    {
      "Sale Price Range": "200.00 - 299.99",
      "Fee A": 100,
      "Fee B": 115,
      "Fee C": 120,
      "Fee D": 135,
    },
    {
      "Sale Price Range": "300.00 - 349.99",
      "Fee A": 120,
      "Fee B": 137.5,
      "Fee C": 140,
      "Fee D": 157.5,
    },
    {
      "Sale Price Range": "350.00 - 399.99",
      "Fee A": 120,
      "Fee B": 140,
      "Fee C": 140,
      "Fee D": 160,
    },
    {
      "Sale Price Range": "400.00 - 449.99",
      "Fee A": 140,
      "Fee B": 162.5,
      "Fee C": 160,
      "Fee D": 182.5,
    },
    {
      "Sale Price Range": "450.00 - 499.99",
      "Fee A": 140,
      "Fee B": 165,
      "Fee C": 160,
      "Fee D": 185,
    },
    {
      "Sale Price Range": "500.00 - 549.99",
      "Fee A": 160,
      "Fee B": 187.5,
      "Fee C": 185,
      "Fee D": 212.5,
    },
    {
      "Sale Price Range": "550.00 - 599.99",
      "Fee A": 160,
      "Fee B": 190,
      "Fee C": 185,
      "Fee D": 215,
    },
    {
      "Sale Price Range": "600.00 - 699.99",
      "Fee A": 180,
      "Fee B": 215,
      "Fee C": 210,
      "Fee D": 245,
    },
    {
      "Sale Price Range": "700.00 - 799.99",
      "Fee A": 210,
      "Fee B": 250,
      "Fee C": 230,
      "Fee D": 270,
    },
    {
      "Sale Price Range": "800.00 - 899.99",
      "Fee A": 230,
      "Fee B": 275,
      "Fee C": 250,
      "Fee D": 295,
    },
    {
      "Sale Price Range": "900.00 - 999.99",
      "Fee A": 250,
      "Fee B": 300,
      "Fee C": 275,
      "Fee D": 325,
    },
    {
      "Sale Price Range": "1,000.00 - 1,199.99",
      "Fee A": 275,
      "Fee B": 335,
      "Fee C": 325,
      "Fee D": 385,
    },
    {
      "Sale Price Range": "1,200.00 - 1,299.99",
      "Fee A": 310,
      "Fee B": 375,
      "Fee C": 350,
      "Fee D": 415,
    },
    {
      "Sale Price Range": "1,300.00 - 1,399.99",
      "Fee A": 310,
      "Fee B": 380,
      "Fee C": 350,
      "Fee D": 420,
    },
    {
      "Sale Price Range": "1,400.00 - 1,499.99",
      "Fee A": 330,
      "Fee B": 405,
      "Fee C": 380,
      "Fee D": 455,
    },
    {
      "Sale Price Range": "1,500.00 - 1,599.99",
      "Fee A": 330,
      "Fee B": 410,
      "Fee C": 380,
      "Fee D": 460,
    },
    {
      "Sale Price Range": "1,600.00 - 1,699.99",
      "Fee A": 360,
      "Fee B": 445,
      "Fee C": 410,
      "Fee D": 495,
    },
    {
      "Sale Price Range": "1,700.00 - 1,799.99",
      "Fee A": 360,
      "Fee B": 450,
      "Fee C": 410,
      "Fee D": 500,
    },
    {
      "Sale Price Range": "1,800.00 - 1,999.99",
      "Fee A": 400,
      "Fee B": 500,
      "Fee C": 440,
      "Fee D": 540,
    },
    {
      "Sale Price Range": "2,000.00 - 2,399.99",
      "Fee A": 440,
      "Fee B": 560,
      "Fee C": 470,
      "Fee D": 590,
    },
    {
      "Sale Price Range": "2,400.00 - 2,499.99",
      "Fee A": 440,
      "Fee B": 565,
      "Fee C": 470,
      "Fee D": 595,
    },
    {
      "Sale Price Range": "2,500.00 - 2,999.99",
      "Fee A": 480,
      "Fee B": 630,
      "Fee C": 500,
      "Fee D": 650,
    },
    {
      "Sale Price Range": "3,000.00 - 3,499.99",
      "Fee A": 575,
      "Fee B": 750,
      "Fee C": 600,
      "Fee D": 775,
    },
    {
      "Sale Price Range": "3,500.00 - 3,999.99",
      "Fee A": 575,
      "Fee B": 775,
      "Fee C": 600,
      "Fee D": 800,
    },
    {
      "Sale Price Range": "4,000.00 - 4,499.99",
      "Fee A": 575,
      "Fee B": 800,
      "Fee C": 600,
      "Fee D": 825,
    },
    {
      "Sale Price Range": "4,500.00 - 4,999.99",
      "Fee A": 575,
      "Fee B": 825,
      "Fee C": 600,
      "Fee D": 850,
    },
    {
      "Sale Price Range": "5,000.00 - 5,999.99",
      "Fee A": 675,
      "Fee B": 975,
      "Fee C": 900,
      "Fee D": 1200,
    },
    {
      "Sale Price Range": "6,000.00 - 7,499.99",
      "Fee A": 675,
      "Fee B": 1050,
      "Fee C": 1125,
      "Fee D": 1500,
    },
    {
      "Sale Price Range": "7,500.00 - 7,999.99",
      "Fee A": 775,
      "Fee B": 1175,
      "Fee C": 1200,
      "Fee D": 1600,
    },
    {
      "Sale Price Range": "8,000.00 - 8,999.99",
      "Fee A": 875,
      "Fee B": 1325,
      "Fee C": 1350,
      "Fee D": 1800,
    },
    {
      "Sale Price Range": "9,000.00 - 9,999.99",
      "Fee A": 975,
      "Fee B": 1475,
      "Fee C": 1500,
      "Fee D": 2000,
    },
    {
      "Sale Price Range": "10,000.00 - 9,999,999.99",
      "Fee A": 0.1,
      "Fee B": 0.15,
      "Fee C": 0.15,
      "Fee D": 0.2,
    },
  ],
  usHeavy: [
    {
      "Sale Price Range": "0.01 - 49.99",
      "Fee A": 1,
      "Fee B": 27.5,
      "Fee C": 25,
      "Fee D": 27.5,
    },
    {
      "Sale Price Range": "50.00 - 99.99",
      "Fee A": 1,
      "Fee B": 40,
      "Fee C": 45,
      "Fee D": 50,
    },
    {
      "Sale Price Range": "100.00 - 199.99",
      "Fee A": 25,
      "Fee B": 65,
      "Fee C": 80,
      "Fee D": 90,
    },
    {
      "Sale Price Range": "200.00 - 299.99",
      "Fee A": 50,
      "Fee B": 90,
      "Fee C": 120,
      "Fee D": 135,
    },
    {
      "Sale Price Range": "300.00 - 349.99",
      "Fee A": 75,
      "Fee B": 110,
      "Fee C": 120,
      "Fee D": 137.5,
    },
    {
      "Sale Price Range": "350.00 - 399.99",
      "Fee A": 75,
      "Fee B": 110,
      "Fee C": 120,
      "Fee D": 140,
    },
    {
      "Sale Price Range": "400.00 - 449.99",
      "Fee A": 110,
      "Fee B": 130,
      "Fee C": 160,
      "Fee D": 182.5,
    },
    {
      "Sale Price Range": "450.00 - 499.99",
      "Fee A": 110,
      "Fee B": 130,
      "Fee C": 160,
      "Fee D": 185,
    },
    {
      "Sale Price Range": "500.00 - 549.99",
      "Fee A": 125,
      "Fee B": 150,
      "Fee C": 185,
      "Fee D": 212.5,
    },
    {
      "Sale Price Range": "550.00 - 599.99",
      "Fee A": 130,
      "Fee B": 150,
      "Fee C": 185,
      "Fee D": 215,
    },
    {
      "Sale Price Range": "600.00 - 699.99",
      "Fee A": 140,
      "Fee B": 170,
      "Fee C": 210,
      "Fee D": 245,
    },
    {
      "Sale Price Range": "700.00 - 799.99",
      "Fee A": 155,
      "Fee B": 190,
      "Fee C": 230,
      "Fee D": 270,
    },
    {
      "Sale Price Range": "800.00 - 899.99",
      "Fee A": 170,
      "Fee B": 210,
      "Fee C": 250,
      "Fee D": 295,
    },
    {
      "Sale Price Range": "900.00 - 999.99",
      "Fee A": 185,
      "Fee B": 230,
      "Fee C": 275,
      "Fee D": 325,
    },
    {
      "Sale Price Range": "1,000.00 - 1,199.99",
      "Fee A": 200,
      "Fee B": 255,
      "Fee C": 325,
      "Fee D": 385,
    },
    {
      "Sale Price Range": "1,200.00 - 1,299.99",
      "Fee A": 225,
      "Fee B": 290,
      "Fee C": 350,
      "Fee D": 415,
    },
    {
      "Sale Price Range": "1,300.00 - 1,399.99",
      "Fee A": 240,
      "Fee B": 305,
      "Fee C": 365,
      "Fee D": 435,
    },
    {
      "Sale Price Range": "1,400.00 - 1,499.99",
      "Fee A": 250,
      "Fee B": 315,
      "Fee C": 380,
      "Fee D": 455,
    },
    {
      "Sale Price Range": "1,500.00 - 1,599.99",
      "Fee A": 260,
      "Fee B": 325,
      "Fee C": 390,
      "Fee D": 470,
    },
    {
      "Sale Price Range": "1,600.00 - 1,699.99",
      "Fee A": 275,
      "Fee B": 345,
      "Fee C": 410,
      "Fee D": 495,
    },
    {
      "Sale Price Range": "1,700.00 - 1,799.99",
      "Fee A": 285,
      "Fee B": 355,
      "Fee C": 420,
      "Fee D": 510,
    },
    {
      "Sale Price Range": "1,800.00 - 1,999.99",
      "Fee A": 300,
      "Fee B": 375,
      "Fee C": 440,
      "Fee D": 540,
    },
    {
      "Sale Price Range": "2,000.00 - 2,399.99",
      "Fee A": 325,
      "Fee B": 415,
      "Fee C": 470,
      "Fee D": 590,
    },
    {
      "Sale Price Range": "2,400.00 - 2,499.99",
      "Fee A": 335,
      "Fee B": 425,
      "Fee C": 480,
      "Fee D": 605,
    },
    {
      "Sale Price Range": "2,500.00 - 2,999.99",
      "Fee A": 350,
      "Fee B": 455,
      "Fee C": 500,
      "Fee D": 650,
    },
    {
      "Sale Price Range": "3,000.00 - 3,499.99",
      "Fee A": 400,
      "Fee B": 565,
      "Fee C": 600,
      "Fee D": 775,
    },
    {
      "Sale Price Range": "3,500.00 - 3,999.99",
      "Fee A": 450,
      "Fee B": 615,
      "Fee C": 650,
      "Fee D": 850,
    },
    {
      "Sale Price Range": "4,000.00 - 4,499.99",
      "Fee A": 475,
      "Fee B": 640,
      "Fee C": 675,
      "Fee D": 900,
    },
    {
      "Sale Price Range": "4,500.00 - 4,999.99",
      "Fee A": 500,
      "Fee B": 665,
      "Fee C": 700,
      "Fee D": 950,
    },
    {
      "Sale Price Range": "5,000.00 - 5,999.99",
      "Fee A": 0.1,
      "Fee B": 0.15,
      "Fee C": 0.15,
      "Fee D": 0.2,
    },
    {
      "Sale Price Range": "6,000.00 - 7,499.99",
      "Fee A": 0.1,
      "Fee B": 0.15,
      "Fee C": 0.15,
      "Fee D": 0.2,
    },
    {
      "Sale Price Range": "7,500.00 - 9,999.99",
      "Fee A": 0.1,
      "Fee B": 0.15,
      "Fee C": 0.15,
      "Fee D": 0.2,
    },
    {
      "Sale Price Range": "10,000.00 - 14,999.99",
      "Fee A": 0.1,
      "Fee B": 0.15,
      "Fee C": 0.15,
      "Fee D": 0.2,
    },
    {
      "Sale Price Range": "15,000.00 - 19,999.99",
      "Fee A": 0.1,
      "Fee B": 0.15,
      "Fee C": 0.15,
      "Fee D": 0.2,
    },
    {
      "Sale Price Range": "20,000.00 - 24,999.99",
      "Fee A": 0.1,
      "Fee B": 0.15,
      "Fee C": 0.15,
      "Fee D": 0.2,
    },
    {
      "Sale Price Range": "25,000.00 - 29,999.99",
      "Fee A": 0.1,
      "Fee B": 0.15,
      "Fee C": 0.15,
      "Fee D": 0.2,
    },
    {
      "Sale Price Range": "30,000.00 - 34,999.99",
      "Fee A": 0.1,
      "Fee B": 0.15,
      "Fee C": 0.15,
      "Fee D": 0.2,
    },
    {
      "Sale Price Range": "35,000.00 - 10,000,000.00",
      "Fee A": 0.1,
      "Fee B": 0.15,
      "Fee C": 0.15,
      "Fee D": 0.2,
    },
  ],
  usNonKiosk: [
    { "Sale Price": "0.00 - 99.99", price: "FREE" },
    { "Sale Price": "100.00 - 499.99", price: 29 },
    { "Sale Price": "500.00 - 999.99", price: 39 },
    { "Sale Price": "1,000.00 - 1,499.99", price: 59 },
    { "Sale Price": "1,500.00 - 1,999.99", price: 69 },
    { "Sale Price": "2,000.00 - 3,999.99", price: 79 },
    { "Sale Price": "4,000.00 - 5,999.99", price: 89 },
    { "Sale Price": "6,000.00 - 7,999.99", price: 99 },
    {
      "Sale Price": "8000.00 - 10,000,000.00",
      price: 119,
    },
  ],
  usOnlineBid: [
    { "Sale Price": "0.00 - 99.99", price: "FREE" },
    { "Sale Price": "100.00 - 499.99", price: 39 },
    { "Sale Price": "500.00 - 999.99", price: 49 },
    { "Sale Price": "1,000.00 - 1,499.99", price: 69 },
    { "Sale Price": "1,500.00 - 1,999.99", price: 79 },
    { "Sale Price": "2,000.00 - 3,999.99", price: 89 },
    { "Sale Price": "4,000.00 - 5,999.99", price: 99 },
    { "Sale Price": "6,000.00 - 7,999.99", price: 119 },
    { "Sale Price": "8000.00 - 10,000,000.00", price: 129 },
  ],
  usStandard: [
    {
      "Sale Price Range": "0.01 - 49.99",
      "Fee A": 1,
      "Fee B": 27.5,
      "Fee C": 25,
      "Fee D": 27.5,
    },
    {
      "Sale Price Range": "50.00 - 99.99",
      "Fee A": 1,
      "Fee B": 40,
      "Fee C": 45,
      "Fee D": 50,
    },
    {
      "Sale Price Range": "100.00 - 199.99",
      "Fee A": 25,
      "Fee B": 65,
      "Fee C": 80,
      "Fee D": 90,
    },
    {
      "Sale Price Range": "200.00 - 299.99",
      "Fee A": 50,
      "Fee B": 90,
      "Fee C": 120,
      "Fee D": 135,
    },
    {
      "Sale Price Range": "300.00 - 349.99",
      "Fee A": 75,
      "Fee B": 110,
      "Fee C": 120,
      "Fee D": 137.5,
    },
    {
      "Sale Price Range": "350.00 - 399.99",
      "Fee A": 75,
      "Fee B": 110,
      "Fee C": 120,
      "Fee D": 140,
    },
    {
      "Sale Price Range": "400.00 - 449.99",
      "Fee A": 110,
      "Fee B": 130,
      "Fee C": 160,
      "Fee D": 182.5,
    },
    {
      "Sale Price Range": "450.00 - 499.99",
      "Fee A": 110,
      "Fee B": 130,
      "Fee C": 160,
      "Fee D": 185,
    },
    {
      "Sale Price Range": "500.00 - 549.99",
      "Fee A": 125,
      "Fee B": 150,
      "Fee C": 185,
      "Fee D": 212.5,
    },
    {
      "Sale Price Range": "550.00 - 599.99",
      "Fee A": 130,
      "Fee B": 150,
      "Fee C": 185,
      "Fee D": 215,
    },
    {
      "Sale Price Range": "600.00 - 699.99",
      "Fee A": 140,
      "Fee B": 170,
      "Fee C": 210,
      "Fee D": 245,
    },
    {
      "Sale Price Range": "700.00 - 799.99",
      "Fee A": 155,
      "Fee B": 190,
      "Fee C": 230,
      "Fee D": 270,
    },
    {
      "Sale Price Range": "800.00 - 899.99",
      "Fee A": 170,
      "Fee B": 210,
      "Fee C": 250,
      "Fee D": 295,
    },
    {
      "Sale Price Range": "900.00 - 999.99",
      "Fee A": 185,
      "Fee B": 230,
      "Fee C": 275,
      "Fee D": 325,
    },
    {
      "Sale Price Range": "1,000.00 - 1,199.99",
      "Fee A": 200,
      "Fee B": 255,
      "Fee C": 325,
      "Fee D": 385,
    },
    {
      "Sale Price Range": "1,200.00 - 1,299.99",
      "Fee A": 225,
      "Fee B": 290,
      "Fee C": 350,
      "Fee D": 415,
    },
    {
      "Sale Price Range": "1,300.00 - 1,399.99",
      "Fee A": 240,
      "Fee B": 305,
      "Fee C": 365,
      "Fee D": 435,
    },
    {
      "Sale Price Range": "1,400.00 - 1,499.99",
      "Fee A": 250,
      "Fee B": 315,
      "Fee C": 380,
      "Fee D": 455,
    },
    {
      "Sale Price Range": "1,500.00 - 1,599.99",
      "Fee A": 260,
      "Fee B": 325,
      "Fee C": 390,
      "Fee D": 470,
    },
    {
      "Sale Price Range": "1,600.00 - 1,699.99",
      "Fee A": 275,
      "Fee B": 345,
      "Fee C": 410,
      "Fee D": 495,
    },
    {
      "Sale Price Range": "1,700.00 - 1,799.99",
      "Fee A": 285,
      "Fee B": 355,
      "Fee C": 420,
      "Fee D": 510,
    },
    {
      "Sale Price Range": "1,800.00 - 1,999.99",
      "Fee A": 300,
      "Fee B": 375,
      "Fee C": 440,
      "Fee D": 540,
    },
    {
      "Sale Price Range": "2,000.00 - 2,399.99",
      "Fee A": 325,
      "Fee B": 415,
      "Fee C": 470,
      "Fee D": 590,
    },
    {
      "Sale Price Range": "2,400.00 - 2,499.99",
      "Fee A": 335,
      "Fee B": 425,
      "Fee C": 480,
      "Fee D": 605,
    },
    {
      "Sale Price Range": "2,500.00 - 2,999.99",
      "Fee A": 350,
      "Fee B": 455,
      "Fee C": 500,
      "Fee D": 650,
    },
    {
      "Sale Price Range": "3,000.00 - 3,499.99",
      "Fee A": 400,
      "Fee B": 565,
      "Fee C": 600,
      "Fee D": 775,
    },
    {
      "Sale Price Range": "3,500.00 - 3,999.99",
      "Fee A": 450,
      "Fee B": 615,
      "Fee C": 650,
      "Fee D": 850,
    },
    {
      "Sale Price Range": "4,000.00 - 4,499.99",
      "Fee A": 475,
      "Fee B": 640,
      "Fee C": 675,
      "Fee D": 900,
    },
    {
      "Sale Price Range": "4,500.00 - 4,999.99",
      "Fee A": 500,
      "Fee B": 665,
      "Fee C": 700,
      "Fee D": 950,
    },
    {
      "Sale Price Range": "5,000.00 - 5,999.99",
      "Fee A": 525,
      "Fee B": 765,
      "Fee C": 0.15,
      "Fee D": 0.2,
    },
    {
      "Sale Price Range": "6,000.00 - 7,499.99",
      "Fee A": 550,
      "Fee B": 790,
      "Fee C": 0.15,
      "Fee D": 0.2,
    },
    {
      "Sale Price Range": "7,500.00 - 9,999.99",
      "Fee A": 575,
      "Fee B": 890,
      "Fee C": 0.15,
      "Fee D": 0.2,
    },
    {
      "Sale Price Range": "10,000.00 - 14,999.99",
      "Fee A": 600,
      "Fee B": 1050,
      "Fee C": 0.15,
      "Fee D": 0.2,
    },
    {
      "Sale Price Range": "15,000.00 - 19,999.99",
      "Fee A": 0.04,
      "Fee B": 0.1,
      "Fee C": 0.15,
      "Fee D": 0.2,
    },
    {
      "Sale Price Range": "20,000.00 - 24,999.99",
      "Fee A": 0.04,
      "Fee B": 0.1,
      "Fee C": 0.15,
      "Fee D": 0.2,
    },
    {
      "Sale Price Range": "25,000.00 - 29,999.99",
      "Fee A": 0.04,
      "Fee B": 0.1,
      "Fee C": 0.15,
      "Fee D": 0.2,
    },
    {
      "Sale Price Range": "30,000.00 - 34,999.99",
      "Fee A": 0.04,
      "Fee B": 0.1,
      "Fee C": 0.15,
      "Fee D": 0.2,
    },
    {
      "Sale Price Range": "35,000.00 - 10,000,000.00",
      "Fee A": 0.04,
      "Fee B": 0.1,
      "Fee C": 0.15,
      "Fee D": 0.2,
    },
    // {
    //   "Sale Price Range": "Homeowners Items",
    //   "Fee A": 0.2,
    //   "Fee B": 0.25,
    //   "Fee C": 0.2,
    //   "Fee D": 0.25,
    // },
  ],
  crashedToysNonKiosk: [
    { "Sale Price": "0.00 - 99.99", price: "FREE" },
    { "Sale Price": "100.00 - 499.99", price: 29 },
    { "Sale Price": "500.00 - 999.99", price: 39 },
    { "Sale Price": "1,000.00 - 1,499.99", price: 59 },
    { "Sale Price": "1,500.00 - 1,999.99", price: 69 },
    { "Sale Price": "2,000.00 - 3,999.99", price: 79 },
    { "Sale Price": "4,000.00 - 5,999.99", price: 89 },
    { "Sale Price": "6,000.00 - 7,999.99", price: 99 },
    {
      "Sale Price": "8000.00 - 10,000,000.00",
      price: 119,
    },
  ],
  crashedToysOnlineLiveBid: [
    { "Sale Price": "0.00 - 99.99", price: "FREE" },
    { "Sale Price": "100.00 - 499.99", price: 39 },
    { "Sale Price": "500.00 - 999.99", price: 49 },
    { "Sale Price": "1,000.00 - 1,499.99", price: 69 },
    { "Sale Price": "1,500.00 - 1,999.99", price: 79 },
    { "Sale Price": "2,000.00 - 3,999.99", price: 89 },
    { "Sale Price": "4,000.00 - 5,999.99", price: 99 },
    { "Sale Price": "6,000.00 - 7,999.99", price: 119 },
    { "Sale Price": "8000.00 - 10,000,000.00", price: 129 },
  ],
  uk: [
    {
      "Sale Price Range": "0.01 - 49.99",
      "Fee A": "15.00",
      "Fee B": "17.00",
      "Fee C": "20.00",
      "Fee D": "22.00",
    },
    {
      "Sale Price Range": "50.00 - 99.99",
      "Fee A": "25.00",
      "Fee B": "29.00",
      "Fee C": "65.00",
      "Fee D": "69.00",
    },
    {
      "Sale Price Range": "100.00 - 199.99",
      "Fee A": "45.00",
      "Fee B": "53.00",
      "Fee C": "85.00",
      "Fee D": "93.00",
    },
    {
      "Sale Price Range": "200.00 - 299.99",
      "Fee A": "53.00",
      "Fee B": "66.00",
      "Fee C": "93.00",
      "Fee D": "106.00",
    },
    {
      "Sale Price Range": "300.00 - 349.99",
      "Fee A": "63.00",
      "Fee B": "80.00",
      "Fee C": "103.00",
      "Fee D": "120.00",
    },
    {
      "Sale Price Range": "350.00 - 399.99",
      "Fee A": "71.00",
      "Fee B": "90.00",
      "Fee C": "111.00",
      "Fee D": "130.00",
    },
    {
      "Sale Price Range": "400.00 - 449.99",
      "Fee A": "75.00",
      "Fee B": "97.00",
      "Fee C": "115.00",
      "Fee D": "137.00",
    },
    {
      "Sale Price Range": "450.00 - 499.99",
      "Fee A": "85.00",
      "Fee B": "109.00",
      "Fee C": "125.00",
      "Fee D": "149.00",
    },
    {
      "Sale Price Range": "500.00 - 549.99",
      "Fee A": "95.00",
      "Fee B": "122.00",
      "Fee C": "135.00",
      "Fee D": "162.00",
    },
    {
      "Sale Price Range": "550.00 - 599.99",
      "Fee A": "105.00",
      "Fee B": "134.00",
      "Fee C": "145.00",
      "Fee D": "174.00",
    },
    {
      "Sale Price Range": "600.00 - 699.99",
      "Fee A": "110.00",
      "Fee B": "143.00",
      "Fee C": "150.00",
      "Fee D": "183.00",
    },
    {
      "Sale Price Range": "700.00 - 799.99",
      "Fee A": "115.00",
      "Fee B": "153.00",
      "Fee C": "155.00",
      "Fee D": "193.00",
    },
    {
      "Sale Price Range": "800.00 - 899.99",
      "Fee A": "120.00",
      "Fee B": "163.00",
      "Fee C": "160.00",
      "Fee D": "203.00",
    },
    {
      "Sale Price Range": "900.00 - 999.99",
      "Fee A": "125.00",
      "Fee B": "173.00",
      "Fee C": "165.00",
      "Fee D": "213.00",
    },
    {
      "Sale Price Range": "1,000.00 - 1,199.99",
      "Fee A": "129.00",
      "Fee B": "184.00",
      "Fee C": "169.00",
      "Fee D": "224.00",
    },
    {
      "Sale Price Range": "1,200.00 - 1,299.99",
      "Fee A": "139.00",
      "Fee B": "202.00",
      "Fee C": "179.00",
      "Fee D": "242.00",
    },
    {
      "Sale Price Range": "1,300.00 - 1,399.99",
      "Fee A": "149.00",
      "Fee B": "217.00",
      "Fee C": "189.00",
      "Fee D": "257.00",
    },
    {
      "Sale Price Range": "1,400.00 - 1,499.99",
      "Fee A": "159.00",
      "Fee B": "232.00",
      "Fee C": "199.00",
      "Fee D": "272.00",
    },
    {
      "Sale Price Range": "1,500.00 - 1,599.99",
      "Fee A": "169.00",
      "Fee B": "247.00",
      "Fee C": "209.00",
      "Fee D": "287.00",
    },
    {
      "Sale Price Range": "1,600.00 - 1,699.99",
      "Fee A": "179.00",
      "Fee B": "262.00",
      "Fee C": "219.00",
      "Fee D": "302.00",
    },
    {
      "Sale Price Range": "1,700.00 - 1,799.99",
      "Fee A": "189.00",
      "Fee B": "277.00",
      "Fee C": "229.00",
      "Fee D": "317.00",
    },
    {
      "Sale Price Range": "1,800.00 - 1,999.99",
      "Fee A": "193.00",
      "Fee B": "288.00",
      "Fee C": "233.00",
      "Fee D": "328.00",
    },
    {
      "Sale Price Range": "2,000.00 - 2,399.99",
      "Fee A": "219.00",
      "Fee B": "329.00",
      "Fee C": "259.00",
      "Fee D": "369.00",
    },
    {
      "Sale Price Range": "2,400.00 - 2,499.99",
      "Fee A": "249.00",
      "Fee B": "372.00",
      "Fee C": "289.00",
      "Fee D": "412.00",
    },
    {
      "Sale Price Range": "2,500.00 - 2,999.99",
      "Fee A": "279.00",
      "Fee B": "417.00",
      "Fee C": "319.00",
      "Fee D": "457.00",
    },
    {
      "Sale Price Range": "3,000.00 - 3,499.99",
      "Fee A": "349.00",
      "Fee B": "512.00",
      "Fee C": "389.00",
      "Fee D": "552.00",
    },
    {
      "Sale Price Range": "3,500.00 - 3,999.99",
      "Fee A": "353.00",
      "Fee B": "541.00",
      "Fee C": "393.00",
      "Fee D": "581.00",
    },
    {
      "Sale Price Range": "4,000.00 - 4,499.99",
      "Fee A": "379.00",
      "Fee B": "592.00",
      "Fee C": "419.00",
      "Fee D": "632.00",
    },
    {
      "Sale Price Range": "4,500.00 - 4,999.99",
      "Fee A": "439.00",
      "Fee B": "677.00",
      "Fee C": "479.00",
      "Fee D": "717.00",
    },
    {
      "Sale Price Range": "5,000.00 - 5,999.99",
      "Fee A": "469.00",
      "Fee B": "744.00",
      "Fee C": "509.00",
      "Fee D": "784.00",
    },
    {
      "Sale Price Range": "6,000.00 - 7,499.99",
      "Fee A": "488.00",
      "Fee B": "826.00",
      "Fee C": "528.00",
      "Fee D": "866.00",
    },
    {
      "Sale Price Range": "7,500.00 - 9,999.99",
      "Fee A": "499.00",
      "Fee B": "937.00",
      "Fee C": "539.00",
      "Fee D": "977.00",
    },
    {
      "Sale Price Range": "10,000.00 - 14,999.99",
      "Fee A": 0.05,
      "Fee B": 0.1,
      "Fee C": 0.06,
      "Fee D": 0.11,
    },
    {
      "Sale Price Range": "15,000.00 - 19,999.99",
      "Fee A": 0.05,
      "Fee B": 0.1,
      "Fee C": 0.06,
      "Fee D": 0.11,
    },
    {
      "Sale Price Range": "20,000.00 - 24,999.99",
      "Fee A": 0.05,
      "Fee B": 0.1,
      "Fee C": 0.06,
      "Fee D": 0.11,
    },
    {
      "Sale Price Range": "25,000.00 - 29,999.99",
      "Fee A": 0.05,
      "Fee B": 0.1,
      "Fee C": 0.06,
      "Fee D": 0.11,
    },
    {
      "Sale Price Range": "30,000.00 - 34,999.99",
      "Fee A": 0.05,
      "Fee B": 0.1,
      "Fee C": 0.06,
      "Fee D": 0.11,
    },
    {
      "Sale Price Range": "35,000.00 - 10,000,000.00",
      "Fee A": 0.05,
      "Fee B": 0.1,
      "Fee C": 0.06,
      "Fee D": 0.11,
    },
  ],
  ukOnlineBid: [
    { "Sale Price": "0.00 - 99.99", price: "7.50" },
    { "Sale Price": "100.00 - 499.99", price: "15.00" },
    { "Sale Price": "500.00 - 999.99", price: "20.00" },
    { "Sale Price": "1,000.00 - 1,499.99", price: "25.00" },
    { "Sale Price": "1,500.00 - 1,999.99", price: "30.00" },
    { "Sale Price": "2,000.00 - 3,999.99", price: "35.00" },
    { "Sale Price": "4,000.00 - 5,999.99", price: "45.00" },
    { "Sale Price": "6,000.00 - 7,999.99", price: "50.00" },
    { "Sale Price": "8,000.00 - 10,000,000.00", price: "60.00" },
  ],
  ukNonKiosk: [
    { "Sale Price": "0.00 - 99.99", price: "7.50" },
    {
      "Sale Price": "100.00 - 499.99",
      price: "15.00",
    },
    {
      "Sale Price": "500.00 - 999.99",
      price: "20.00",
    },
    {
      "Sale Price": "1,000.00 - 1,499.99",
      price: "25.00",
    },
    {
      "Sale Price": "1,500.00 - 1,999.99",
      price: "30.00",
    },
    {
      "Sale Price": "2,000.00 - 3,999.99",
      price: "30.00",
    },
    {
      "Sale Price": "4,000.00 - 5,999.99",
      price: "35.00",
    },
    {
      "Sale Price": "6,000.00 - 7,999.99",
      price: "40.00",
    },
    { "Sale Price": "8,000.00 - 10,000,000.00", price: "50.00" },
  ],
};
export default data;
