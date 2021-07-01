import jose from 'jose'

const { Jose } = jose

export async function encryptPin(pin) {
    const keyData = await fetch('https://issuing-key.stripe.com/v1/keys').then(r => r.json())
    const rsa_key = Jose.Utils.importRsaPublicKey(keyData.jwk, "RSA-OAEP");
    const cryptographer = new Jose.WebCryptographer(); cryptographer.setContentEncryptionAlgorithm("A128CBC-HS256");
    const encrypter = new Jose.JoseJWE.Encrypter(cryptographer, rsa_key);
    encrypter.addHeader('kid', keyData.key_id)
    const encryptedNumber = await encrypter.encrypt(pin)
    return encryptedNumber 
}