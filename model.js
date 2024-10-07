export async function fetchContent() {
    try {
        console.log(`Fetching data from the server...`);
        const response = await fetch(
            `https://gist.githubusercontent.com/dupontdenis/b2e5e1b7460c239b39deb76f8d458908/raw/817a898940170ae4ea6d5b16ef462f959c4d38d1/gistfile1.txt`
        );
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const textData = await response.text();
        console.log("Fetched raw data:", textData);

        // Remove the "products =" part and trim the string
        const jsonData = textData.replace('products =', '').trim();
        console.log("Data to process:", jsonData);

        // Extract product information using regular expressions
        const productRegex = /{[^}]+}/g;
        const products = [];
        let match;
        while ((match = productRegex.exec(jsonData)) !== null) {
            const productString = match[0];
            const nameMatch = /name:\s*"([^"]+)"/.exec(productString);
            const priceMatch = /price:\s*"([^"]+)"/.exec(productString);
            const stockedMatch = /stocked:\s*(true|false)/.exec(productString);
            if (nameMatch && priceMatch && stockedMatch) {
                products.push({
                    name: nameMatch[1],
                    price: priceMatch[1],
                    stocked: stockedMatch[1] === 'true'
                });
            }
        }
        console.log("Extracted products:", products);

        return products;
    } catch (error) {
        console.error("Error fetching content:", error);
        throw error;
    }
}