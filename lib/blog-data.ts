export interface BlogPost {
  slug: string;
  title: string;
  tag: "Tax Strategy" | "URA & Compliance" | "SME Growth" | "Case Study";
  date: string;
  readTime: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
  };
  keyTakeaways: string[];
  content: {
    subheading: string;
    paragraphs: string[];
    callout?: {
      type: "tip" | "warning" | "statute";
      text: string;
    };
  }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "five-deductible-expenses-ugandan-smes-miss",
    title: "5 Legitimate Business Deductions Most Ugandan Founders Overlook",
    tag: "Tax Strategy",
    date: "September 20, 2026",
    readTime: "5 min read",
    excerpt: "You might be paying more Corporate Income Tax than required simply because routine operational expenditures aren't structured as allowable deductions.",
    author: {
      name: "Tax Health Advisory Team",
      role: "Senior Tax Advocates",
    },
    keyTakeaways: [
      "Expenses must be incurred wholly and exclusively in the production of business income.",
      "Informal casual labor payouts require proper documentation to qualify as deductible expenses.",
      "Capital allowances and asset depreciation can legally reduce your taxable profit margin.",
    ],
    content: [
      {
        subheading: "1. The High Cost of Missing Allowable Deductions",
        paragraphs: [
          "Most Ugandan SMEs calculate their taxable profit too conservatively out of fear. When tax season arrives, many directors fail to claim routine operational costs simply because they lack formal tax receipts or worry URA will flag them.",
          "Under Section 22 of the Income Tax Act of Uganda, any expenditure incurred wholly and exclusively in the production of gross income can be deducted. If you do not claim valid expenses, you artificially inflate your profits and overpay the 30% corporate tax rate.",
        ],
        callout: {
          type: "tip",
          text: "Always maintain digital bank or mobile money merchant payment trails for casual expenses—statutory auditors require verifiable audit trails.",
        },
      },
      {
        subheading: "2. Utilities, Remote Working & Home-Office Allocations",
        paragraphs: [
          "If your management or administrative team operates partly from a home office or non-commercial premises, an apportioned share of power, high-speed internet, and workspace maintenance can be legitimately deducted.",
          "The critical requirement is maintaining a consistent monthly allocation formula backed by tenancy agreements and payment vouchers.",
        ],
      },
      {
        subheading: "3. Staff Welfare vs. Taxable Benefits",
        paragraphs: [
          "Providing staff tea, drinking water, first-aid supplies, and on-site lunches directly in the workplace constitutes allowable staff welfare deductions. They do not trigger Pay As You Earn (PAYE) liabilities when provided equally to all employees on business premises.",
        ],
      },
    ],
  },
  {
    slug: "demystifying-efris-for-retailers-and-wholesalers",
    title: "EFRIS Simplified: Surviving Audits Without Disrupting Daily Sales",
    tag: "URA & Compliance",
    date: "September 14, 2026",
    readTime: "6 min read",
    excerpt: "Electronic Fiscal Receipting and Invoicing Solution (EFRIS) penalties can cripple trading cash flow. Here is how to configure your till and invoices safely.",
    author: {
      name: "Tax Health Advisory Team",
      role: "Compliance & Dispute Specialists",
    },
    keyTakeaways: [
      "Issuing non-fiscalized receipts carries statutory penalties up to UGX 6,000,000 per violation.",
      "Stock reconciliation between physical store inventory and your EFRIS virtual portal is the #1 audit trigger.",
      "System integration APIs can automate invoice generation without slowing cashier queues.",
    ],
    content: [
      {
        subheading: "1. Why EFRIS Is Not Just Another Billing Software",
        paragraphs: [
          "URA's Electronic Fiscal Receipting and Invoicing Solution (EFRIS) was designed to monitor transactions in real time. For VAT-registered enterprises, an invoice generated without a fiscal fiscalized QR code and verification key is legally invalid.",
          "Buyers cannot claim input tax deductions on non-EFRIS receipts, leading corporate customers to immediately drop suppliers who fail to issue compliant invoices.",
        ],
        callout: {
          type: "warning",
          text: "Section 73A of the Tax Procedures Code Act imposes severe penalties for failing to issue fiscal invoices or attempting to tamper with fiscal devices.",
        },
      },
      {
        subheading: "2. Solving the Physical Stock vs. Virtual Stock Discrepancy",
        paragraphs: [
          "The most frequent trap for traders is purchasing inventory from non-registered suppliers. When you sell goods through EFRIS without corresponding input stock registered on your virtual warehouse, the system flags a negative balance.",
          "Conducting a quarterly stock health check ensures your physical store inventory matches URA's digital records before an inspection notice arrives.",
        ],
      },
    ],
  },
  {
    slug: "case-study-kampala-distributor-cleared-80m-penalties",
    title: "Case Study: How a Kampala Beverage Distributor Resolved UGX 80M in Back Penalties",
    tag: "Case Study",
    date: "August 30, 2026",
    readTime: "4 min read",
    excerpt: "Faced with frozen bank accounts and punitive withholding tax assessments, this family-owned enterprise resolved their liability in 28 days.",
    author: {
      name: "Tax Health Advisory Team",
      role: "Litigation & Advisory Unit",
    },
    keyTakeaways: [
      "Agency notices (account freezes) can be halted through structured Memorandum of Understanding (MOU) negotiations.",
      "Filing backlog reconciliation often reveals that theoretical assessments greatly exceed true tax liabilities.",
      "Section 40 waiver provisions provide relief when good cause and past compliance intent can be shown.",
    ],
    content: [
      {
        subheading: "1. The Challenge: A Crippling Agency Notice",
        paragraphs: [
          "Our client, an established fast-moving consumer goods distributor operating out of industrial Kampala, received a formal third-party agency notice. Their primary operating accounts were frozen due to estimated assessments spanning three prior fiscal years.",
          "The business was unable to pay staff wages or replenish supplier orders, risking total commercial shutdown within two weeks.",
        ],
      },
      {
        subheading: "2. Our Intervention: The 14-Day Diagnostic & Ledger Cleanup",
        paragraphs: [
          "Our advisory team performed a forensic reconciliation of bank statements against actual VAT and withholding tax filings. We discovered that automated presumptive default assessments had been issued based on gross bank deposits rather than actual trading revenue.",
          "Within 10 business days, we submitted an objection accompanied by reconciled ledgers and petitioned the Commissioner for lifting the bank agency notice.",
        ],
        callout: {
          type: "statute",
          text: "Under Section 31 of the Tax Procedures Code Act, taxpayers can negotiate an interim installment schedule to release bank accounts while substantive audits continue.",
        },
      },
      {
        subheading: "3. The Outcome",
        paragraphs: [
          "The initial UGX 80M assessment was recomputed to a legitimate net liability of UGX 14M, with all punitive late-filing interest waived under Section 40. The distributor resumed unrestricted banking operations with a sustainable 6-month payment plan.",
        ],
      },
    ],
  },
  {
    slug: "presumptive-vs-corporate-tax-for-growing-enterprises",
    title: "Presumptive Tax vs. Corporate Income Tax: When Should You Transition?",
    tag: "SME Growth",
    date: "August 18, 2026",
    readTime: "5 min read",
    excerpt: "If your annual turnover is approaching UGX 150 Million, staying under the presumptive regime can accidentally expose your business to compliance audits.",
    author: {
      name: "Tax Health Advisory Team",
      role: "Strategic Business Planners",
    },
    keyTakeaways: [
      "Presumptive tax is simplified for businesses below the UGX 150M gross turnover threshold.",
      "Operating on presumptive rates prevents you from carrying forward trading losses.",
      "Corporate clients and tenders frequently mandate full audited financial accounts.",
    ],
    content: [
      {
        subheading: "1. Understanding the UGX 150,000,000 Threshold",
        paragraphs: [
          "For sole traders and small partnerships, Uganda's presumptive tax system eliminates the burden of complex formal bookkeeping. You pay a predetermined flat amount or modest percentage based on gross turnover bands.",
          "However, once your sales hit the UGX 150M threshold, remaining in the presumptive system breaches statutory regulations.",
        ],
      },
      {
        subheading: "2. The Hidden Penalty of Not Carrying Forward Losses",
        paragraphs: [
          "Under presumptive taxation, you cannot declare tax losses. If your business invested heavily in equipment, inventory, or fit-outs and operated at an accounting loss this year, you still owe a presumptive fee.",
          "Transitioning to standard Corporate Income Tax (CIT) allows you to offset initial capital expenditure against future taxable revenue for years to come.",
        ],
      },
    ],
  },
];