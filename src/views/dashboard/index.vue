<template>
  <div>
    <el-row :gutter="10">
      <el-col :md="6">
        <project-overview title="项目概况" :config="{height: 285}" />
        <week-track title="周跟踪" :config="{height: 175}" />
        <material-statistics title="材料信息" :config="{height: 220}" />
        <personnel-access title="人员进出" :config="{height: 160}" class="mb-0" />
      </el-col>

      <el-col :md="7">
        <bim-model title="BIM 3D立体效果图展示" :config="{height: 705}" />
        <work-force title="劳动力" :config="{height: 160}" class="mb-0" />
      </el-col>

      <el-col :md="11">
        <el-row :gutter="10">

          <el-col :md="11">
            <project-period title="工期管理" :config="{height: 280}" />
            <project-completed title="已完成里程碑列表" :config="{height: 380}" />
          </el-col>

          <el-col :md="13">
            <project-quantity title="项目计划完成数量和实际完成数量" :config="{height: 672}" />
          </el-col>
        </el-row>

        <surveilance-video title="实时监控视频" :config="{height: 193}" class="mb-0" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ProjectOverview from './children/project-overview'
import WeekTrack from './children/week-track'
import MaterialStatistics from './children/material-statistics'
import PersonnelAccess from './children/personnel-access'
import BimModel from './children/bim-model'
import WorkForce from './children/work-force'
import ProjectPeriod from './children/project-period'
import ProjectCompleted from './children/project-completed'
import SurveilanceVideo from './children/surveilance-video'
import ProjectQuantity from './children/project-quantity'

export default {
  components: {
    ProjectOverview,
    WeekTrack,
    MaterialStatistics,
    PersonnelAccess,
    BimModel,
    WorkForce,
    ProjectPeriod,
    ProjectCompleted,
    SurveilanceVideo,
    ProjectQuantity
  }
}
</script>

<style lang="scss" scoped>

</style>
