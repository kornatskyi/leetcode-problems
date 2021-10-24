import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class Main {

    public static int priceCheck(List<String> products, List<Double> productPrices, List<String> productSold, List<Double> soldPrice) {

        Map<String, Double> map = new HashMap<String, Double>();
        int errorCounter = 0;
        for (int i = 0; i < products.size(); i++) {
            String product = products.get(i);
            Double price = productPrices.get(i);
            map.put(product, price);
        }

        for (int i = 0; i < productSold.size(); i++) {
            String soldProduct = productSold.get(i);
            Double sPrice = soldPrice.get(i);
            if (Double.compare(sPrice, map.get(soldProduct)) != 0) {
                errorCounter++;
            }
        }
        return errorCounter;
    }

    public static void main(String[] args) {


        List products = Arrays.asList("eggs", "milk", "cheese");
        List productPrices = Arrays.asList(2.89, 3.29, 5.79);
        List productSold = Arrays.asList("eggs", "eggs", "cheese", "milk");
        List soldPrice = Arrays.asList(2.89, 2.99, 5.97, 3.29);

        System.out.println(priceCheck(products, productPrices, productSold, soldPrice));

    }
}
