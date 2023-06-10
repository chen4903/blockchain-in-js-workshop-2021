import elliptic from "elliptic";
const ec = new elliptic.ec("secp256k1");

export function generatePair() { // 创建公私钥对的函数
  const keypair = ec.genKeyPair();
  window.keypair = keypair;
  return {
    publicKey: keypair.getPublic("hex"),
    privateKey: keypair.getPrivate("hex")
  };
}

export function sign(message, privateKey) {
  try {
    // 根据私钥得到keypair
    const keypair = ec.keyFromPrivate(privateKey, "hex");
    // 用keypair对消息进行签名
    return keypair.sign(message).toDER("hex");
  } catch (error) {
    return "invalid signature";
  }
}

export function verifySignature(message, signature, publicKey) {
  try {
    // 根据公钥获得keypair
    const keypair = ec.keyFromPublic(publicKey, "hex");
    // 根据message, signature,keypair验证签名
    return ec.verify(message, signature, keypair);
  } catch (error) {
    return false;
  }
}
