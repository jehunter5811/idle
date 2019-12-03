import React, { Component } from 'react';
import { Flex, Text, Heading, Image, Link } from 'rimble-ui'
import styles from './Footer.module.scss';
import {
  Link as RouterLink,
} from "react-router-dom";

class Footer extends Component {
  state = {};

  render() {
    return (
      <Flex id="footer" flexDirection={'column'} className={styles.footer} backgroundColor={'white'} alignItems={'center'} justifyContent={'flex-start'} pl={0}>
        <Flex flexDirection={['column','row']} justifyContent={'flex-start'} alignItems={'flex-start'} width={1} maxWidth={['35em','70em']} height={['auto','100%']}>

          <Flex width={[1,3/10]} flexDirection={'column'} height={['auto','100%']}>
            <Heading.h3 textAlign={['center','left']} fontFamily={'sansSerif'} fontSize={[3,3]} my={3} color={'dark-gray'}>
              Start a Conversation
            </Heading.h3>
            <Link textAlign={['center','left']} fontFamily={'sansSerif'} fontSize={[3,2]} color={'dark-gray'} hoverColor={'blue'}>info@idle.finance</Link>
          </Flex>

          <Flex width={[1,3/10]} flexDirection={'column'} height={['auto','100%']}>
            <Heading.h3 textAlign={['center','left']} fontFamily={'sansSerif'} fontSize={[3,3]} my={3} color={'dark-gray'}>
              Explore
            </Heading.h3>
            <Flex flexDirection={'row'} justifyContent={['space-evenly','flex-start']}>
              <Link href="https://twitter.com/idlefinance" target="_blank">
                <Image src="images/twitter-logo.png" height={'2.4em'} mr={['auto',3]} my={[2,0]} className={styles.socialIcon} />
              </Link>
              <Link href="https://t.me/idlefinance" target="_blank">
                <Image src="images/telegram-logo.png" height={'2.4em'} mr={['auto',3]} my={[2,0]} className={styles.socialIcon} />
              </Link>
              <Link href="https://discord.gg/mpySAJp" target="_blank">
                <Image src="images/discord-logo.png" height={'2.4em'} mr={['auto',3]} my={[2,0]} className={styles.socialIcon} />
              </Link>
              <Link href="https://medium.com/@idlefinance" target="_blank">
                <Image src="images/medium-logo.png" height={'2.4em'} mr={['auto',3]} my={[2,0]} className={styles.socialIcon} />
              </Link>
              <Link href="https://github.com/bugduino/idle" target="_blank">
                <Image src="images/github-logo.png" height={'2.4em'} mr={['auto',3]} my={[2,0]} className={styles.socialIcon} />
              </Link>
              <Link href="https://etherscan.io/address/0xAcf651Aad1CBB0fd2c7973E2510d6F63b7e440c9#code" target="_blank">
                <Image src="images/etherscan.png" height={'2.4em'} mr={['auto',3]} my={[2,0]} className={styles.socialIcon} />
              </Link>
            </Flex>
          </Flex>

          <Flex width={[1,4/10]} flexDirection={'column'} height={['auto','100%']} justifyContent={'flex-end'}>
            <Flex flexDirection={['column']} mt={[2, 0]}>
              <Heading.h3 textAlign={['center','left']} fontFamily={'sansSerif'} fontSize={[3,2]} my={3} color={'white'}>
                Built on
              </Heading.h3>
              <Flex flexDirection={['column','row']} alignItems={['normal','center']} justifyContent={['center','flex-start']}>
                <Link style={{flex:'1 1 0px'}} textAlign={['center','left']} pr={[0,3]} href="https://www.ethereum.org/" target="_blank">
                  <Image src="images/ethereum.png" width={[1/2,1]} height={'auto'} maxWidth={'initial'} mr={['auto',3]} ml={['auto',0]} my={[3,0]} />
                </Link>
                <Link style={{flex:'1 1 0px'}} textAlign={['center','left']} pr={[0,3]} href="https://app.compound.finance" target="_blank">
                  <Image src="images/compound-light.png" width={[1/2,1]} height={'auto'} maxWidth={'initial'} mr={['auto',3]} ml={['auto',0]} my={[3,0]} />
                </Link>
                <Link style={{flex:'1 1 0px'}} textAlign={['center','left']} href="https://fulcrum.trade" target="_blank">
                  <Image src="images/fulcrum.svg" width={[1/2,1]} height={'auto'} maxWidth={'initial'} mr={['auto',3]} ml={['auto',0]} my={[3,0]} />
                </Link>
              </Flex>
              <Flex width={1} flexDirection={['column','row']} justifyContent={['center','flex-end']} align={['center','flex-end']} py={3}>
                <Text textAlign={['center','flex-end']} fontSize={[2,1]} py={[2,0]} color={'white'}>&copy; 2019 - Idle Labs Inc.</Text>
                <RouterLink to="/terms-of-service" style={{textDecoration:'none'}}>
                  <Text textAlign={['center','flex-end']} pl={2} fontSize={[2,1]} py={[2,0]} color={'#0df'}>Terms of Service</Text>
                </RouterLink>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  }
}

export default Footer;
