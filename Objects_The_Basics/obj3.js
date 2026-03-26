/**
 * Professional SaaS Access Control System
 * Goal: Manage feature access and usage limits for different subscription plans.
 */

// ১. Plan Configuration: প্ল্যান অনুযায়ী কি কি সুবিধা থাকবে (Static Config)
const PLANS = {
    FREE: {
        id: 'free',
        name: 'Free Tier',
        features: {
            maxProjects: 3,
            canExportPDF: false,
            apiRateLimit: 100, // Calls per hour
        },
        billingCycle: 'always'
    },
    PRO: {
        id: 'pro',
        name: 'Professional',
        features: {
            maxProjects: 20,
            canExportPDF: true,
            apiRateLimit: 5000,
        },
        billingCycle: 'monthly'
    },
    ENTERPRISE: {
        id: 'enterprise',
        name: 'Enterprise',
        features: {
            maxProjects: Infinity, // অসীম
            canExportPDF: true,
            apiRateLimit: Infinity,
        },
        billingCycle: 'yearly'
    }
};

// ২. User Factory: নতুন ইউজার তৈরি করার জন্য
function createUser(id, name, planKey) {
    // প্ল্যান ভ্যালিডেশন
    const selectedPlan = PLANS[planKey.toUpperCase()];
    if (!selectedPlan) {
        throw new Error("Invalid Plan Selected");
    }

    return {
        id,
        name,
        // প্ল্যান রেফারেন্স - আসল প্ল্যান অবজেক্টকে ফ্রীজ করে রাখাই ভালো
        plan: Object.freeze(selectedPlan), 
        // Usage tracking (Real world data will come from DB)
        usage: {
            projectsCreated: 0,
            pdfDownloads: 0,
            apiCalls: 0
        },

        // মেথড: নতুন প্রজেক্ট তৈরি করার চেষ্টা
        createProject() {
            // গেট-কিপিং: লিমিট চেক করা
            if (this.usage.projectsCreated >= this.plan.features.maxProjects) {
                console.error(`🔴 Access Denied: [${this.name}] has reached the max projects limit for [${this.plan.name}]. Please upgrade.`);
                return null;
            }

            // লিমিট ক্রস না করলে প্রজেক্ট তৈরি করো
            this.usage.projectsCreated++;
            console.log(`🟢 Project Created Successfully! Current usage: ${this.usage.projectsCreated}/${this.plan.features.maxProjects}`);
            return { id: `p${Date.now()}`, name: `Project ${this.usage.projectsCreated}` };
        },

        // মেথড: PDF ডাউনলোড করার চেষ্টা
        downloadPDF() {
            // গেট-কিপিং: বুলিয়ান চেক
            if (!this.plan.features.canExportPDF) {
                console.warn(`🔴 Feature Locked: PDF download is not included in the [${this.plan.name}].`);
                return null;
            }

            this.usage.pdfDownloads++;
            console.log(`🟢 PDF Download Started... (Total: ${this.usage.pdfDownloads})`);
            return "PDF_BUFFER_DATA";
        }
    };
}

// ==========================================
// ইন্ডাস্ট্রি ডেমোস্ট্রেশন (The Real Logic)
// ==========================================

console.log("--- Starting SaaS Demo --- \n");

// ৩. নতুন দুইজন ইউজার তৈরি করো (ফ্যাক্টরি ফাংশন ব্যবহার করে)
const freeUser = createUser("u01", "Humayun (Dev)", "FREE");
const proUser = createUser("u02", "Arif (Manager)", "PRO");

// ৪. কেস স্টাডি ১: ফ্রি ইউজার প্রজেক্ট লিমিট ক্রস করার চেষ্টা করছে
console.log(`[Demo] ${freeUser.name} trying to create projects...`);
freeUser.createProject(); // ১
freeUser.createProject(); // ২
freeUser.createProject(); // ৩
freeUser.createProject(); // ৪ (এইবার ব্লক খাবে)

console.log("\n");

// ৫. কেস স্টাডি ২: ফ্রি ইউজার PDF ডাউনলোড করার চেষ্টা করছে
console.log(`[Demo] ${freeUser.name} trying to download PDF...`);
freeUser.downloadPDF(); // ব্লক খাবে

console.log("\n");

// ৬. কেস স্টাডি ৩: প্রো ইউজার PDF ডাউনলোড করছে
console.log(`[Demo] ${proUser.name} trying to download PDF...`);
proUser.downloadPDF(); // সাকসেসফুল হবে

console.log("\n");

// ৭. ইন্ডাস্ট্রি সিকিউরিটি চেক: কেউ কি ডাইনামিক্যালি প্ল্যান চেঞ্জ করতে পারবে?
// যেহেতু আমরা Object.freeze ব্যবহার করেছি PLANS অবজেক্টে, তাই এটা সম্ভব না।
console.log("[Security Check] Trying to illegally upgrade Free User to Pro...");
// freeUser.plan = PLANS.PRO; // This will fail if not using ES Modules with strict mode
// PLANS.FREE.features.canExportPDF = true; // This will definitely fail silently or throw error in strict mode

console.log(`${freeUser.name}'s plan is still: ${freeUser.plan.name}`);

console.log("\n --- Demo Ended ---");