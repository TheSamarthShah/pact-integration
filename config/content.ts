export const industryContent = {
  manufacturing: {
    hero: {
      label: "Factory Operations Study : 2026",
      headline:
        "Software is built by people who have never run a factory floor.",
      subhead:
        "We are looking for 5 experienced Plant Managers to tell us where standard ERP systems are failing.",
    },
    problem: {
      title: "Built for clean offices, not the real world.",
      paragraphs: [
        "Standard software (like SAP or Tally) expects perfect data. But the reality of a factory is messy. Trucks arrive late, quantities don't match, and vendors send updates on WhatsApp.",
        "When the software doesn't understand these daily changes, your accounting team is forced to do manual data entry in Excel just to keep the business running.",
      ],
      flaws: [
        {
          title: "1. Stuck Over 1 Rupee",
          desc: "If a vendor's bill and your system have even a 1-rupee mismatch because of GST rounding, the software freezes the whole process. An accountant has to step in and fix it manually.",
        },
        {
          title: "2. Blind to Paper and WhatsApp",
          desc: "The software only works if someone types the data perfectly. It cannot read a greasy delivery challan from the unloading dock, or a quick WhatsApp update from a supplier.",
        },
      ],
    },
    audit: {
      title: "What we are investigating.",
      desc: "We are not trying to sell you software. We want to sit down with teams dealing with high-volume manufacturing to map out where time is being wasted.",
      areas: [
        {
          title: "Matching POs to Bills",
          desc: "We want to see how your team handles it when the original Purchase Order, the physical Goods Receipt Note (GRN), and the final invoice do not match perfectly.",
        },
        {
          title: "Handling Messy Paperwork",
          desc: "Show us how you manage the chaos—physical delivery challans, informal WhatsApp approvals, and manual ERP entry.",
        },
        {
          title: "Payment Approval Delays",
          desc: "When an invoice has an error, what happens? We are mapping how many phone calls and emails it takes to finally approve a payment.",
        },
      ],
    },
    progress: {
      title: "Field Notes & Early Insights",
      desc: "Live observations from our ongoing conversations with factory owners in the local industrial belt.",
      insights: [
        {
          date: "July 12, 2026",
          sourceTag: "Auto Parts Factory",
          title: "The WhatsApp Bottleneck",
          text: "Found out that most delivery challans are being verified via WhatsApp photos days before the actual paper reaches the accounts department.",
        },
        {
          date: "July 18, 2026",
          sourceTag: "Heavy Machinery Plant",
          title: "Partial Shipment Headaches",
          text: "Standard software handles 1-to-1 orders perfectly. But when a vendor sends half the order today and half tomorrow, manual matching becomes a nightmare.",
        },
      ],
    },
    application: {
      targetRole: "Plant Manager / Accounts Head",
      softwarePlaceholder: "SAP, Oracle, Tally, etc.",
      painpointPlaceholder:
        "e.g., Wasting time matching physical challans to vendor emails...",
    },
  },

  logistics: {
    hero: {
      label: "Transport Operations Study : 2026",
      headline:
        "Transport software is built by people who have never run a dispatch yard.",
      subhead:
        "We are looking for 5 Fleet Owners to tell us where transport management systems actually break down.",
    },
    problem: {
      title: "Built for AC offices, not the highway.",
      paragraphs: [
        "Transport Management Systems look great on a laptop, but they fail the moment a truck goes the road. They expect perfect GPS signal, straight routes, and drivers who log every expense properly.",
        "In reality, routes change, waiting (halt) times aren't logged, and LRs (Lorry Receipts) get crumpled in the truck. You are left piecing together the truth from WhatsApp photos and fuel slips.",
      ],
      flaws: [
        {
          title: "1. The Missing POD Problem",
          desc: "Drivers send a blurry photo of a stamped POD (Bilty), but your billing team cannot process the invoice until someone manually types that data into the system.",
        },
        {
          title: "2. Hidden Profit Leaks",
          desc: "Halt charges, toll variations, and route changes happen daily, but standard software makes it nearly impossible to quickly add them to the final client bill.",
        },
      ],
    },
    audit: {
      title: "What we are investigating.",
      desc: "We want to study the gap between the physical movement of trucks and the digital flow of money.",
      areas: [
        {
          title: "LR / POD Tracking",
          desc: "Show us how you manage the gap between a physical signature at the unloading dock and the final invoice sent to the client.",
        },
        {
          title: "Driver Expense Checking",
          desc: "We want to see the mess. How do you currently check fuel slips, toll receipts, and on-road expense claims against your dispatch records?",
        },
        {
          title: "Halt & Waiting Charges",
          desc: "When a truck is held up for 8 hours at a client's warehouse, how is that documented and billed without causing an argument with the client?",
        },
      ],
    },
    progress: {
      title: "Field Notes & Early Insights",
      desc: "Live observations from our ongoing conversations with local fleet operators.",
      insights: [
        {
          date: "July 14, 2026",
          sourceTag: "Mid-sized Transporter",
          title: "The Halt Charge Dispute",
          text: "Drivers wait 8 hours at the unloading dock, but without proof, clients consistently refuse to pay the extra waiting invoices.",
        },
        {
          date: "July 20, 2026",
          sourceTag: "Inter-state Fleet",
          title: "Billing Delays",
          text: "Client billing is delayed by 10-15 days simply because physical PODs are couriered back to the main office in weekly batches.",
        },
      ],
    },
    application: {
      targetRole: "Fleet Owner / Dispatch Head",
      softwarePlaceholder: "Custom TMS, Excel, Fleetx, etc.",
      painpointPlaceholder:
        "e.g., Chasing drivers for POD photos so we can send the bill...",
    },
  },

  jewelry: {
    hero: {
      label: "Jewelry Operations Study : 2026",
      headline: "Tally and Khatabook were not built to run a jewelry business.",
      subhead: "We are looking for 5 wholesale and retail owners to show us where standard software fails in tracking fine gold and Karigar ledgers."
    },
    problem: {
      title: "The Rupees vs. Fine Gold Nightmare.",
      paragraphs: [
        "Apps like Khatabook and OKCredit are great for tracking daily cash and customer udhaar. But they completely break down when you need to track the weight, Tanch (purity), and changing Bhav (rate) of raw gold.",
        "Because standard software doesn't understand Karigar 'Ghat' (wastage) or old gold exchange, owners are forced to manage cash on their phone and fine gold in a physical red diary or fragile Excel sheets."
      ],
      flaws: [
        {
          title: "1. Old Gold Exchange",
          desc: "If a customer trades in 50g of old gold to buy new 916 hallmarked jewelry, standard software struggles to adjust the physical stock and cash ledger at the same time."
        },
        {
          title: "2. The Karigar Jama-Udhar",
          desc: "Sending 100g of pure gold to a Karigar and getting finished items back requires complex calculation for Ghat (wastage) and Tanch. Standard software cannot automate this."
        }
      ]
    },
    audit: {
      title: "What we are investigating.",
      desc: "We are studying exactly where traditional accounting software fails the jewelry trade.",
      areas: [
        {
          title: "Karigar Jama-Udhar",
          desc: "Walk us through how you issue fine gold to craftsmen, account for expected dust/ghat, and log the finished items back into stock."
        },
        {
          title: "Bhav (Rate) Fixing & Advance",
          desc: "Show us how you manage the billing when a customer pays an advance to lock today's gold rate, but takes delivery next month."
        },
        {
          title: "WhatsApp to Workshop",
          desc: "We want to see how a custom jewelry order goes from a WhatsApp photo from a customer into a formal production slip for the Karigar."
        }
      ]
    },
    progress: {
      title: "Field Notes & Early Insights",
      desc: "Live observations from our ongoing conversations with wholesale jewelers and showroom owners.",
      insights: [
        {
          date: "July 16, 2026",
          sourceTag: "Wholesale Jeweler",
          title: "The Khatabook Limitation",
          text: "Found out that wholesalers are using OKCredit/Khatabook for cash recovery, but still rely on physical diaries to track how much fine gold is stuck with different Karigars."
        },
        {
          date: "July 21, 2026",
          sourceTag: "Retail Showroom",
          title: "The 'Tanch' Calculation Delay",
          text: "Discovered that billing takes twice as long because staff has to manually calculate the pure gold value of old exchange items before typing the final amount into the software."
        }
      ]
    },
    application: {
      targetRole: "Jewelry Showroom Owner / Wholesale Director",
      softwarePlaceholder: "Khatabook, OKCredit, Tally, Local Custom Software",
      painpointPlaceholder: "e.g., Managing the Karigar fine gold diary separate from Khatabook..."
    }
  }
};

export type IndustryKey = keyof typeof industryContent;
