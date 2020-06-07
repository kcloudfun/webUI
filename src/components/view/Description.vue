<template>
  <div>
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <myAside></myAside>
      </el-aside>

      <el-container>
        <el-header>
          <myHeader></myHeader>
        </el-header>

        <el-main>
          <div>
            <span>项目简介</span>
            <el-divider></el-divider>
            <el-row>
              <el-col :span="11">
                <el-card class="box-card" shadow="hover">
                  <div slot="header" class="clearfix">
                    <span>webUI，前端界面工程</span>
                  </div>
                  <el-collapse>
                    <el-collapse-item title="开发框架" name="1">
                      <div>Vue+Element</div>
                    </el-collapse-item>
                    <el-collapse-item title="部署" name="2">
                      <div>部署使用Nginx，并配置反向代理解决请求后端工程时的跨域问题</div>
                    </el-collapse-item>
                    <el-collapse-item title="备注" name="3">
                      <div>前端本应当也和后端一样拆成不同模块，但由于本人意愿只在后端，暂不对前端做过多探讨</div>
                    </el-collapse-item>
                  </el-collapse>
                </el-card>
              </el-col>
              <el-col :span="11" :offset="2">
                <el-card class="box-card" shadow="hover">
                  <div slot="header" class="clearfix">
                    <span>common，后端工具包</span>
                  </div>
                  <div>放置全项目通用常量、枚举、工具方法</div>
                  <el-collapse style="margin-top: 20px;">
                    <el-collapse-item title="BeanUtils" name="1">
                      <div>bean转map，map转bean</div>
                    </el-collapse-item>
                    <el-collapse-item title="ITemplateDao" name="2">
                      <div>基于Mybatis的通用式单行插入以及批量插入</div>
                    </el-collapse-item>
                  </el-collapse>
                </el-card>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="11">
                <el-card class="box-card" shadow="hover">
                  <div slot="header" class="clearfix">
                    <span>admin，后端权限管理模块</span>
                  </div>
                  <el-collapse>
                    <el-collapse-item title="开发框架" name="1">
                      <div>总体采用Spring Boot+Mybatis模式，其他中间件还有Spring Security、Druid、Kaptcha、Swagger2</div>
                    </el-collapse-item>
                    <el-collapse-item title="部署" name="2">
                      <div>打成jar包直接运行</div>
                    </el-collapse-item>
                  </el-collapse>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </el-main>

        <el-footer>
          <myFooter></myFooter>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import myFooter from "@/components/view/MyFooter";
import myHeader from "@/components/view/MyHeader";
import myAside from "@/components/view/MyAside";

export default {
  name: "description",
  components: {
    myFooter,
    myHeader,
    myAside
  }
};
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.el-row {
  margin-bottom: 20px;
}
</style>