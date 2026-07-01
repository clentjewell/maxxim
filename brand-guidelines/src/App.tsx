import Cover from './pages/Cover'
import Contents from './pages/Contents'
import Philosophy from './pages/Philosophy'
import StrategyFoundation from './pages/StrategyFoundation'
import StrategyHierarchy from './pages/StrategyHierarchy'
import LogoVariants from './pages/LogoVariants'
import LogoTreatments from './pages/LogoTreatments'
import LogoMisuse from './pages/LogoMisuse'
import Colour from './pages/Colour'
import ColourInUse from './pages/ColourInUse'
import Typography from './pages/Typography'
import TypeColour from './pages/TypeColour'
import ImageryPhilosophy from './pages/ImageryPhilosophy'
import ImageryCategories from './pages/ImageryCategories'
import ImageryAvoid from './pages/ImageryAvoid'
import VoiceDimensions from './pages/VoiceDimensions'
import VoiceDoDont from './pages/VoiceDoDont'
import VoiceStyle from './pages/VoiceStyle'
import Specialists from './pages/Specialists'
import ApplicationsProposal from './pages/ApplicationsProposal'
import ApplicationsSocial from './pages/ApplicationsSocial'
import BackCover from './pages/BackCover'

/**
 * Maxxim Brand Guidelines — Edition 03.
 * 22 A4-landscape pages, in document order, on the grey "desk" mount.
 */
export default function App() {
  return (
    <div className="desk">
      <Cover />
      <Contents />
      <Philosophy />
      <StrategyFoundation />
      <StrategyHierarchy />
      <LogoVariants />
      <LogoTreatments />
      <LogoMisuse />
      <Colour />
      <ColourInUse />
      <Typography />
      <TypeColour />
      <ImageryPhilosophy />
      <ImageryCategories />
      <ImageryAvoid />
      <VoiceDimensions />
      <VoiceDoDont />
      <VoiceStyle />
      <Specialists />
      <ApplicationsProposal />
      <ApplicationsSocial />
      <BackCover />
    </div>
  )
}
