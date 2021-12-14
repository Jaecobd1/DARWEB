import { Card, Timeline, Typography } from "antd";
import React, { useMemo } from "react";
import { useMoralis } from "react-moralis";
import { Flex } from "uikit/Flex/Flex";
import DiscovARLogo from './LogoNB.png';
// import DiscovARNews from './DiscovARNews';

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
    color: "white"
  },
  text: {
    fontSize: "16px",
    color: "white"
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    display: "flex",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
    background: "rgb(151 164 175 / 100%)",
    
    justifyContent: "center",
    
  },
  timeline: {
    marginBottom: "-45px",
  },
  h1: {
    fontSize: "30px",
    position: "center",
    
  },
  insideCard: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    display: "flex",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
    background: "white",
    justifyContent: "center",
  }
  
};

export default function QuickStart({ isServerInfo }) {
  const { Moralis } = useMoralis();

  const isInchDex = useMemo(() => (Moralis.Plugins?.oneInch ? true : false), [Moralis.Plugins?.oneInch]);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
    <Card style={styles.card}>
    <h1 style={styles.h1}>Welcome to DiscovAR</h1>
    <img height="10%" width="100%"src={DiscovARLogo} />
    <h2></h2>
    <card style={styles.insideCard}>
    <div>
      Hello
    </div>

    </card>
      </Card>
      <div>
        <Card
          style={styles.card}
          title={
            <>
              💣 <Text strong>Starting Local Chain (optional)</Text>
            </>
          }
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="💿">
              <Text style={styles.text}>
                Install{" "}
                <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/truffle">
                  Truffle
                </a>{" "}
                and{" "}
                <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/ganache-cli">
                  ganache-cli
                </a>{" "}
                <Text code>npm install -g ganache-cli truffle</Text>
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="⚙️">
              <Text style={styles.text}>
                Start you local devchain: <Text code>npm run devchain</Text> on a new terminal
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="📡">
              <Text style={styles.text}>
                Deploy test contract: <Text code>npm run deploy</Text> on a new terminal
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="✅" style={styles.text}>
              <Text>
                Open the 📄<Text strong> Contract</Text> tab
              </Text>
            </Timeline.Item>
          </Timeline>
        </Card>
        <Card
          style={{ marginTop: "10px", ...styles.card }}
          title={
            <>
              📡 <Text strong> Connecting your Local Chain to the Moralis DB</Text>
            </>
          }
        >
          
        </Card>
      </div>
    </div>
  );
}
