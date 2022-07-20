// ** React Imports
import { Fragment, useContext } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Custom Hooks
import { useRTL } from '@hooks/useRTL'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Charts
import ApexBarChart from '@src/views/charts/apex/ApexBarChart'
import ApexLineChart from '@src/views/charts/apex/ApexLineChart'
import ApexAreaChart from '@src/views/charts/apex/ApexAreaCharts'
import ApexRadarChart from '@src/views/charts/apex/ApexRadarChart'
import ApexDonutChart from '@src/views/charts/apex/ApexDonutChart'
import ApexRadialBarChart from '@src/views/charts/apex/ApexRadialbar'
import ApexColumnChart from '@src/views/charts/apex/ApexColumnCharts'
import ApexHeatmapChart from '@src/views/charts/apex/ApexHeatmapChart'
import ApexScatterChart from '@src/views/charts/apex/ApexScatterCharts'
import ApexCandlestickChart from '@src/views/charts/apex/ApexCandlestickChart'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'

const ApexCharts = () => {
  // ** Hooks
  const [isRtl] = useRTL()

  // ** Theme Colors
  const { colors } = useContext(ThemeColors)

  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Apex Charts' breadCrumbParent='Charts' breadCrumbActive='Apex' />
      <Row className='match-height'>
        <Col sm='12'>
          <p>
            A React.js component for ApexCharts. Read full documnetation{' '}
            <a href='https://github.com/apexcharts/react-apexcharts' target='_blank' rel='noopener noreferrer'>
              here
            </a>
          </p>
        </Col>
        <Col sm='12'>
          <ApexAreaChart direction={isRtl ? 'rtl' : 'ltr'} />
        </Col>
        <Col sm='12'>
          <ApexColumnChart direction={isRtl ? 'rtl' : 'ltr'} />
        </Col>
        <Col sm='12'>
          <ApexScatterChart
            direction={isRtl ? 'rtl' : 'ltr'}
            primary={colors.primary.main}
            success={colors.success.main}
            warning={colors.warning.main}
          />
        </Col>
        <Col sm='12'>
          <ApexLineChart direction={isRtl ? 'rtl' : 'ltr'} warning={colors.warning.main} />
        </Col>
        <Col xl='6' lg='12'>
          <ApexBarChart direction={isRtl ? 'rtl' : 'ltr'} info={colors.info.main} />
        </Col>
        <Col xl='6' lg='12'>
          <ApexCandlestickChart
            direction={isRtl ? 'rtl' : 'ltr'}
            success={colors.success.main}
            danger={colors.danger.main}
          />
        </Col>
        <Col xl='6' lg='12'>
          <ApexHeatmapChart />
        </Col>
        <Col xl='6' lg='12'>
          <ApexRadialBarChart />
        </Col>
        <Col xl='6' lg='12'>
          <ApexRadarChart />
        </Col>
        <Col xl='6' lg='12'>
          <ApexDonutChart />
        </Col>
      </Row>
    </Fragment>
  )
}

export default ApexCharts
