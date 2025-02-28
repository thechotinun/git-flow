public class DiscountCalculator {
    
    public static double calculateDiscount(double amount) {
        double discountAmount = amount * 0.15;
        
        double discountedAmount = amount - discountAmount;
        
        return discountedAmount;
    }

    public static double calculateDiscount(String amountStr) {
        double amount = Double.parseDouble(amountStr);
        
        return calculateDiscount(amount);
    }

    public static double getDiscountAmount(double amount) {
        return amount * 0.15;
    }

    public static void main(String[] args) {
        System.out.println("15%");
        System.out.println("==========================");
        
        double[] amounts = {1000.0, 2500.0, 5000.0, 10000.0};
        
        for (double amount : amounts) {
            double discountedAmount = calculateDiscount(amount);
            double discountAmount = getDiscountAmount(amount);
            
            System.out.println("Amount: " + amount + " Bath");
            System.out.println("Discount 15%: " + discountAmount + " Bath");
            System.out.println("Total: " + discountedAmount + " Bath");
            System.out.println("--------------------------");
        }
        
        try {
            String amountStr = "3500.50";
            double discountedFromString = calculateDiscount(amountStr);
            System.out.println("test String: " + amountStr);
            System.out.println("total: " + discountedFromString + " Bath");
        } catch (NumberFormatException e) {
            System.out.println("Wrong: type");
        }
        
        if (args.length > 0) {
            try {
                double inputAmount = Double.parseDouble(args[0]);
                System.out.println("\nCalculator input: " + inputAmount + " Bath");
                System.out.println("Total: " + calculateDiscount(inputAmount) + " Bath");
            } catch (NumberFormatException e) {
                System.out.println("\nwrong");
            }
        }
    }
}