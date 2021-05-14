


import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'






const GalleryContainer = () => (
  <Modal trigger={<Button className="gallery">Gallery</Button>}>
    <Modal.Header>Gallery</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='extrasmall' />
      <Modal.Description textAlign={"center"}>
 
        <div className="pics">
        <Image style={{padding:15}}src='https://i.imgur.com/DlszsAc.jpg' />
        <Image style={{padding:15}}src='https://i.imgur.com/Onxg1Lm.jpg' />
        <Image style={{padding:15}}src='https://i.imgur.com/wXPIMMa.jpg' />
        <Image style={{padding:15}}src='https://i.imgur.com/DPWq2oi.jpg' />
        <Image style={{padding:15}}src='https://i.imgur.com/1IrEr1y.jpg' />
        <Image style={{padding:15}}src='https://i.imgur.com/5Tg1WW0.jpg' />
        <Image style={{padding:15}}src='https://i.imgur.com/ny5G3WY.jpg' />
        <Image style={{padding:15}}src='https://i.imgur.com/lXu5xjH.jpg' />
        <Image style={{padding:15}}src='https://i.imgur.com/96KHyw7.jpg' />
        <Image style={{padding:15}}src='https://i.imgur.com/BFG7YN5.jpg' />
        <Image style={{padding:15}}src='https://i.imgur.com/gqC1Dcz.jpg' />
        <Image style={{padding:15}}src='https://i.imgur.com/Pg8aAs5.jpg' />
        <Image style={{padding:15}}src='https://imgur.com/LEmjmpW' />
        <Image style={{padding:15}}src='https://i.imgur.com/XACOMXa.jpg' />
        <Image style={{padding:15}}src='https://i.imgur.com/MjjKQTY.jpg' />
        <Image style={{padding:15}}src='https://i.imgur.com/9HMMGdz.jpg' />
        </div>
      </Modal.Description>
    </Modal.Content>

  </Modal>
)

export default GalleryContainer 

