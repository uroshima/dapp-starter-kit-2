import { Connect, SimpleSigner, MNID } from 'uport-connect'

const uport = new Connect('React uPort IPFS DApp', {
    clientId: '2omYPjiPUiR6jyNdSZRHgbpn9PxiVqbtVsR',
    network: 'rinkeby',
    signer: SimpleSigner('8db0ba1d7b3a9cb9b3ff7b759b9e008f27791a3e8e1ac6ff6b60180b8265b414')
})

const initAccount = async () => {
    const user = await uport.requestCredentials({
        requested: ['name', 'country', 'avatar'],
        notifications: true // We want this if we want to recieve credentials
    })
    // get user details
    const decodedId = MNID.decode(user.address)
    const specificNetworkAddress = decodedId.address
    return { specificNetworkAddress, user }
}

const web3 = uport.getWeb3()
export { web3, uport, MNID, initAccount }