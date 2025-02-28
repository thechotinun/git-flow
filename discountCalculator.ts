/**
 * Class for calculating 15% discount
 */
class DiscountCalculator {
    /**
     * Calculate 15% discount from the given amount
     * 
     * @param amount Amount to calculate discount
     * @returns Amount after 15% discount
     */
    static calculateDiscount(amount: number): number {
        // Calculate 15% discount
        const discountAmount = amount * 0.15;
        
        // Calculate amount after discount
        const discountedAmount = amount - discountAmount;
        
        // Return amount after discount
        return discountedAmount;
    }

    /**
     * Calculate 15% discount from the given amount in string format
     * 
     * @param amountStr Amount in string format
     * @returns Amount after 15% discount
     * @throws Error if the string cannot be parsed to number
     */
    static calculateDiscountFromString(amountStr: string): number {
        // Parse string to number
        const amount = parseFloat(amountStr);
        
        if (isNaN(amount)) {
            throw new Error("Invalid number format");
        }
        
        // Call method to calculate discount
        return this.calculateDiscount(amount);
    }

    /**
     * Calculate only the 15% discount amount (not subtracted from total)
     * 
     * @param amount Amount to calculate discount
     * @returns Discount amount (15% of the input)
     */
    static getDiscountAmount(amount: number): number {
        // Calculate only the 15% discount
        return amount * 0.15;
    }
}

// Main function to run the program
function main() {
    console.log("15% Discount Calculator");
    console.log("==========================");
    
    // Test with various amounts
    const amounts = [1000.0, 2500.0, 5000.0, 10000.0];
    
    for (const amount of amounts) {
        // Calculate discount
        const discountedAmount = DiscountCalculator.calculateDiscount(amount);
        const discountAmount = DiscountCalculator.getDiscountAmount(amount);
        
        // Show results
        console.log(`Amount: ${amount} Baht`);
        console.log(`Discount 15%: ${discountAmount.toFixed(2)} Baht`);
        console.log(`Total: ${discountedAmount.toFixed(2)} Baht`);
        console.log("--------------------------");
    }
    
    try {
        const amountStr = "3500.50";
        const discountedFromString = DiscountCalculator.calculateDiscountFromString(amountStr);
        console.log(`Test String: ${amountStr}`);
        console.log(`Total: ${discountedFromString.toFixed(2)} Baht`);
    } catch (e) {
        console.log("Error: Invalid number format");
    }
    
    //command line
    const customAmount = 7500;
    console.log(`\nCalculating discount for: ${customAmount} Baht`);
    console.log(`Total after 15% discount: ${DiscountCalculator.calculateDiscount(customAmount).toFixed(2)} Baht`);
}

// Run the main function
main();