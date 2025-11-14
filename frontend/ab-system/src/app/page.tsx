// ./src/app/page.tsx
import { ConnectButton } from "@/components/ConnectButton";
import { InfoList } from "@/components/InfoList";
import { ActionButtonList } from "@/components/ActionButtonList";
import { SignMessage } from "@/components/SignMessage";
import { MintBadge } from "@/components/MintBadge";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="landing-page">
      {/* Floating Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Image 
              src="/reown.svg" 
              alt="AB System" 
              width={36} 
              height={36} 
              priority 
            />
            <span className="logo-text">AB System</span>
          </div>
          <div className="nav-actions">
            <ConnectButton />
          </div>
        </div>
      </nav>

      {/* Hero Section - Asymmetric Grid */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>⚡</span>
            <span>Blockchain-Powered Testing</span>
          </div>
          
          <h1 className="hero-title">
            Testing that's
            <span className="gradient-text">
              Transparent.
              <br />
              Verifiable.
            </span>
          </h1>
          
          <p className="hero-subtitle">
            Run experiments you can prove. Every test result on-chain, 
            cryptographically signed, and publicly verifiable.
          </p>

          <div className="hero-cta">
            <ConnectButton />
            <button className="btn-secondary">
              <span>Explore Demo</span>
              <span className="arrow">→</span>
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-cards">
            <div className="metric-card card-1">
              <div className="metric-label">Conversion Rate</div>
              <div className="metric-value">24.8%</div>
              <div className="metric-change">↑ 12.3%</div>
            </div>
            
            <div className="metric-card card-2">
              <div className="metric-label">Active Tests</div>
              <div className="metric-value">47</div>
              <div className="metric-change">↑ 8 this week</div>
            </div>
            
            <div className="metric-card card-3">
              <div className="metric-label">Verifications</div>
              <div className="metric-value">1.2K</div>
              <div className="metric-change">↑ 100%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">Built for Trust</h2>
          <p className="section-subtitle">
            Every feature designed to maximize transparency and eliminate doubt
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <span>🔒</span>
            </div>
            <h3 className="feature-title">Immutable Records</h3>
            <p className="feature-text">
              Test configurations and results stored permanently on-chain. 
              No one can alter history, not even you.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <span>⚡</span>
            </div>
            <h3 className="feature-title">Real-Time Updates</h3>
            <p className="feature-text">
              Watch your experiments unfold live with instant blockchain 
              updates and comprehensive analytics dashboards.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <span>🌐</span>
            </div>
            <h3 className="feature-title">Globally Distributed</h3>
            <p className="feature-text">
              No central authority. Your tests run on a worldwide network 
              of nodes ensuring maximum reliability.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <span>✍️</span>
            </div>
            <h3 className="feature-title">Cryptographic Proofs</h3>
            <p className="feature-text">
              Every test signed with your private key. Verify authenticity 
              and prevent unauthorized modifications.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <span>📊</span>
            </div>
            <h3 className="feature-title">Statistical Rigor</h3>
            <p className="feature-text">
              Advanced statistical models running on-chain ensure your 
              conclusions are both accurate and verifiable.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <span>🔗</span>
            </div>
            <h3 className="feature-title">Simple Integration</h3>
            <p className="feature-text">
              Drop-in SDK and REST API make it trivial to add blockchain 
              verification to your existing stack.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="demo-section">
        <div className="demo-container">
          <div className="section-header">
            <h2 className="section-title">See It In Action</h2>
            <p className="section-subtitle">
              Try the core features that power decentralized A/B testing
            </p>
          </div>

          <div className="demo-grid-three">
            <div className="demo-card">
              <div className="demo-card-header">
                <h3>Mint Achievement Badge</h3>
                <span className="demo-badge">On-Chain</span>
              </div>
              <p className="demo-description">
                Mint an achievement badge directly to the blockchain. Permanent, 
                verifiable proof of test completions and milestones.
              </p>
              <div className="demo-content">
                <MintBadge />
              </div>
            </div>

            <div className="demo-card">
              <div className="demo-card-header">
                <h3>Message Signing</h3>
                <span className="demo-badge">Live</span>
              </div>
              <p className="demo-description">
                Test cryptographic signing with your wallet. Every signature 
                is unique and verifiable.
              </p>
              <div className="demo-content">
                <SignMessage />
              </div>
            </div>

            <div className="demo-card">
              <div className="demo-card-header">
                <h3>Connection Info</h3>
                <span className="demo-badge">Real-Time</span>
              </div>
              <p className="demo-description">
                View your current wallet connection details and network status 
                in real-time.
              </p>
              <div className="demo-content compact">
                <InfoList />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">
            Start Testing With Confidence
          </h2>
          <p className="cta-subtitle">
            Connect your wallet and run your first verifiable A/B test in minutes
          </p>
          <div className="cta-buttons">
            <ConnectButton />
            <ActionButtonList />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <Image 
                src="/reown.svg" 
                alt="AB System" 
                width={32} 
                height={32} 
              />
              <span className="logo-text">AB System</span>
            </div>
            <p className="footer-tagline">
              Decentralized A/B Testing for the Modern Web
            </p>
          </div>

          <div className="footer-section">
            <h4>Technology</h4>
            <a href="https://reown.com" target="_blank" rel="noopener noreferrer">
              Reown
            </a>
            <a href="https://wagmi.sh" target="_blank" rel="noopener noreferrer">
              Wagmi
            </a>
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
              Next.js
            </a>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <a href="#">Documentation</a>
            <a href="#">API Reference</a>
            <a href="#">Examples</a>
          </div>

          <div className="footer-section">
            <h4>Community</h4>
            <a href="#">GitHub</a>
            <a href="#">Discord</a>
            <a href="#">Twitter</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 AB System. Built with Web3 technology.</p>
        </div>
      </footer>
    </div>
  );
}