





const Footer = () => {
    const appleProducts = [
        {
            productName: "Store",
            href: "#",
        },
        {
            productName: "Mac",
            href: "#",
        },
        {
            productName: "iPad",
            href: "#",
        },
        {
            productName: "Watch",
            href: "#",
        },
        {
            productName: "AirPods",
            href: "#",
        },
        {
            productName: "Tv&Home",
            href: "#",
        },
        {
            productName: "Entertainment",
            href: "#",
        },
        {
            productName: "Accessories",
            href: "#",
        },
        {
            productName: "store",
            href: "#",
        },
        {
            productName: "Support",
            href: "#",
        },

    ]



    return (
        <footer className=" bg-gray-100">
            <div className="mt-4 flex flex-col justify-center   ">
                <div className="text-xs text-gray-500 font-sans mt-11 mx-5 md:mx-60 ">
                    <p>◊No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3-, 6-, 9- or 12-month tenures from most leading card issuers. Eligible AirPods, HomePod and Beats products are available with No Cost EMI on 3- and 6-month tenures only. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuer’s threshold. No Cost EMI is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. Terms apply.</p>
                    <br />

                    <p>Representative example:</p><br />
                    <p>A purchase of ₹79900.00 repaid over 12 months with an interest rate of 15.99% p.a. and No Cost EMI savings of ₹6514.00 requires monthly payments of ₹6658.00. Total amount payable: ₹79900.00.</p>
                    <br />
                    <p>‡Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001.00 applies. Click here to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Instant cashback is not available to Business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback.</p>
                    <br />
                    <p>*Apple Education Pricing is available to current and newly accepted college students and their parents, as well as teachers and staff at all levels. For more information, visit apple.com/in-edu/store.</p>
                    <br />
                    <p>1. Qualified Purchasers can receive Promotion Savings when they purchase an eligible Mac or iPad with their choice of a Promotion Product at a Qualifying Location. Customers will be charged for all items in their cart, including the Promotion Product. Only one Promotion Product can be obtained per eligible Mac or iPad per Qualified Purchaser. The offer is subject to availability, while supplies last. View full terms and conditions of offer here.</p>
                    <br />
                    <p>2. Available in two models: AirPods 4 and AirPods 4 with Active Noise Cancellation.</p>
                    <br />
                    <p>Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to Chinese (Simplified), English (Australia, Canada, India, Ireland, New Zealand, Singapore, South Africa, UK or US), French, German, Italian, Japanese, Korean, Portuguese (Brazil) or Spanish, as part of an iOS 18, iPadOS 18 and macOS Sequoia software update, with more languages coming over the course of the year, including Vietnamese. Some features may not be available in all regions or languages.</p>
                    <br />
                    <p>A subscription is required for Apple TV+.</p><br />
                    <p>Features are subject to change. Some features, applications and services may not be available in all regions or all languages.</p>

                </div>
            </div>

            <div className="border border-gray-300 h-[1px] mt-8 mx-60"> </div>

            <div className="flex flex-wrap  justify-center items-center"   >
                <div className="flex space-x-32">
                    <div className="mt-3   p-5  ">

                        <ul className="space-y-1 ">
                            <li className="text-sm font-semibold ">Shop and Learn</li>
                            {
                                appleProducts.map((items, index) => (
                                    <li key={index}><a href={items.href} className="text-xs text-gray-600 hover:underline" >{items.productName}</a></li>

                                ))
                            }
                        </ul>
                        <ul className="space-y-1 mt-3">
                            <li className="text-sm font-semibold">Apple Wallet</li>
                            <li className="text-xs text-gray-600 hover:underline">Wallet</li>
                        </ul>
                    </div>

                    <div className="mt-3 p-5 ">
                        <ul className="space-y-2  ">
                            <li className="text-sm font-semibold">Account</li>
                            <li className="text-xs text-gray-600 hover:underline">Manage Your Apple Account</li>
                            <li className="text-xs text-gray-600 hover:underline">Apple Store Account</li>
                            <li className="text-xs text-gray-600 hover:underline">iCloud.com</li>
                        </ul>
                        <ul className="space-y-2 mt-3 ">
                            <li className="text-sm font-semibold">Entertainment</li>
                            <li className="text-xs text-gray-600 hover:underline">Apple One</li>
                            <li className="text-xs text-gray-600 hover:underline">Apple TV+</li>
                            <li className="text-xs text-gray-600 hover:underline">Apple Music</li>
                            <li className="text-xs text-gray-600 hover:underline">Apple Arcade</li>
                            <li className="text-xs text-gray-600 hover:underline">Apple Podcasts</li>
                            <li className="text-xs text-gray-600 hover:underline">Apple Books</li>
                            <li className="text-xs text-gray-600 hover:underline">App Store</li>

                        </ul>
                    </div>
                </div>
                <div className="">
                    <div className=" flex items-center  space-x-32 ">
                        <div className="p-5 mb-20">

                            <ul className="space-y-2 ">
                                <li className="text-sm font-semibold">Apple Store </li>
                                <li className="text-xs text-gray-600 hover:underline">Find a Store</li>
                                <li className="text-xs text-gray-600 hover:underline">Genius Bar</li>
                                <li className="text-xs text-gray-600 hover:underline">Today at Apple</li>
                                <li className="text-xs text-gray-600 hover:underline">Group Reservations</li>
                                <li className="text-xs text-gray-600 hover:underline">Apple Camp</li>
                                <li className="text-xs text-gray-600 hover:underline">Apple Trade In</li>
                                <li className="text-xs text-gray-600 hover:underline">Ways to Buy</li>
                                <li className="text-xs text-gray-600 hover:underline">Recycling Programme</li>
                                <li className="text-xs text-gray-600 hover:underline">Order Status</li>
                                <li className="text-xs text-gray-600 hover:underline">Shopping Help</li>

                            </ul>

                        </div>
                        <div className=" pr-9 md:mb-16">
                            <ul className="space-y-2">
                                <li className="text-sm font-semibold">For Business</li>
                                <li className="text-xs text-gray-600 hover:underline">Apple and Business</li>
                                <li className="text-xs text-gray-600 hover:underline">Shop for Business</li>

                            </ul>
                            <ul className="space-y-2 mt-3">
                                <li className="text-sm font-semibold">For Education</li>
                                <li className="text-xs text-gray-600 hover:underline">Apple and Education</li>
                                <li className="text-xs text-gray-600 hover:underline">Shop for Education</li>
                                <li className="text-xs text-gray-600 hover:underline">Shop for University</li>
                            </ul>

                            <ul className="space-y-2 mt-3">
                                <li className="text-sm font-semibold">For Healthcare</li>
                                <li className="text-xs text-gray-600 hover:underline">Apple in Healthcare</li>
                                <li className="text-xs text-gray-600 hover:underline">Mac in Healthcare</li>
                                <li className="text-xs text-gray-600 hover:underline">Health on Apple Watch</li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className=" w-full md:w-auto ">
                    <div className=" p-5  ml-4  ">
                        <ul className="space-y-2">
                            <li className="text-sm font-semibold">Apple Values</li>
                            <li className="text-xs text-gray-600 hover:underline">Accessibility</li>
                            <li className="text-xs text-gray-600 hover:underline">Education</li>
                            <li className="text-xs text-gray-600 hover:underline">Environment</li>
                            <li className="text-xs text-gray-600 hover:underline">Privacy</li>
                            <li className="text-xs text-gray-600 hover:underline">Supply Chain Innovation</li>

                        </ul>
                        <ul className="space-y-2 mt-3">
                            <li className="text-sm font-semibold">About Apple</li>
                            <li className="text-xs text-gray-600 hover:underline">Newsroom</li>
                            <li className="text-xs text-gray-600 hover:underline">Apple Leadership</li>
                            <li className="text-xs text-gray-600 hover:underline">Career Opportunities</li>
                            <li className="text-xs text-gray-600 hover:underline">Investors</li>
                            <li className="text-xs text-gray-600 hover:underline">Ethics & Compliance</li>
                            <li className="text-xs text-gray-600 hover:underline">Events</li>
                            <li className="text-xs text-gray-600 hover:underline">Contact Apple</li>

                        </ul>
                    </div>
                </div>
            </div>


            <div className="w-[400px] mx-5 mt-10 md:w-full md:mx-56 p-3 ">
                <p className="text-xs text-gray-600 ">More ways to shop: <span className="text-blue-500 underline">Find an Apple Store </span> or <span className="text-blue-500 underline"> other retailer </span>near you. Or call<span className="text-blue-500 underline"> 000800 040 1966.</span></p>
            </div>

            <div className="border border-gray-400 h-[1px] mt-6 mx-5 md:mx-56"> </div>

            <div className=" mt-6  pb-4 text-xs text-gray-600 flex flex-col  md:mx-[200px] md:flex md:flex-row md:items-center">
                <p className="mx-8">Copyright © 2025 Apple Inc. All rights reserved.</p>
                <p className="mx-8 ">Privacy Policy | Terms of Use  | Sales Policy | Legal | Site Map</p>
            </div>

        </footer>

    )
}

export default Footer







