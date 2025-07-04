# 🧾 Invoice Dashboard

A responsive, modular invoice dashboard built with **React + TypeScript**.
It supports filtering by invoice status and sorting by amount or date — with performance optimized using `useMemo`.

---

## Features

* **Filter** invoices by status (`All`, `Paid`, `Pending`, `Overdue`)
* **Sort** invoices by `Date` or `Amount`
* **Revenue Summary** (Total & Filtered Paid Revenue)
* **useMemo Optimization** to avoid unnecessary recalculations
* **Fully responsive** layout with TailwindCSS
* Modular component and utility structure

---

## 🧠 useMemo in Action

This project uses `useMemo` to **memoize expensive computations** such as filtering, sorting, and calculating totals. This ensures smooth performance even with large datasets.

| Hook               | Purpose                            | Recomputes When...                        |
| ------------------ | ---------------------------------- | ----------------------------------------- |
| `filteredInvoices` | Filter invoice list by status      | `invoices` or `statusFilter` changes      |
| `sortedInvoices`   | Sort filtered list by date/amount  | `filteredInvoices` or `sortField` changes |
| `totalRevenue`     | Compute total revenue from Paid    | `invoices` changes                        |
| `filteredRevenue`  | Compute revenue from filtered list | `sortedInvoices` changes                  |
| `statusCounts`     | Count invoices per status type     | `invoices` changes                        |

---

## 🗂 Folder Structure

```
├── public/
│   └── invoices.json         # Invoice data source
├── src/
│   ├── components/
│   │   └── InvoiceTable/
│   │       ├── InvoiceTable.tsx
│   │       ├── InvoiceHeader.tsx
│   │       ├── SortDropdown.tsx
│   │       ├── InvoiceTableContent.tsx
│   │       ├── StatusFilter.tsx
│   │       ├── RevenueSummary.tsx
│   │       └── InvoiceRow.tsx
│   ├── utils/
│   │   ├── filterInvoices.ts
│   │   └── sortInvoices.ts
│   └── types/
│       └── index.ts          # TypeScript interfaces
```

---

## 📦 Setup Instructions

```bash
git clone https://github.com/SanyaShresta25/invoice-dashboard-using-useMemo.git
cd my-app
npm install
npm run dev
```

---

## 📄 Example JSON Structure

`/public/invoices.json`

```json
[
  {
    "id": 1,
    "customer": "Tech Solutions",
    "amount": 1500,
    "status": "Paid",
    "date": "2025-06-15"
  }
]
```

---

## Built With

![React](https://img.shields.io/badge/React-DBF3FA?style=flat\&logo=react\&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-EAF4FF?style=flat\&logo=typescript\&logoColor=3178C6)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-F0FDFA?style=flat\&logo=tailwindcss\&logoColor=38B2AC)
![useMemo](https://img.shields.io/badge/useMemo-FAFAFA?style=flat\&logo=react\&logoColor=gray)

---

## 🙌 Acknowledgements

This project demonstrates how to structure performant React components with memoization for real-world dashboards.
