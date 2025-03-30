async function getPrices() {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple&vs_currencies=usd";
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("prices").innerHTML = `
            <tr>
                <td>Bitcoin (BTC)</td>
                <td>$${data.bitcoin.usd}</td>
            </tr>
            <tr>
                <td>Ethereum (ETH)</td>
                <td>$${data.ethereum.usd}</td>
            </tr>
            <tr>
                <td>Ripple (XRP)</td>
                <td>$${data.ripple.usd}</td>
            </tr>
        `;
    } catch (error) {
        document.getElementById("prices").innerHTML = "<tr><td colspan='2'>Hata oluştu!</td></tr>";
    }
}
