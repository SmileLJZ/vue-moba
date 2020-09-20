<template>
  <div>
    <el-card>
      <div slot="header" class="clearfix">
        <span>分类列表</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="addCate">添加分类</el-button>
      </div>
      <div class="block">
        <el-tree
          v-if="items"
          :data="items"
          node-key="_id"
          default-expand-all
          :expand-on-click-node="false"
        >
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>{{ node.label }}</span>
            <span>
              <el-button
                size="mini"
                type="primary"
                icon="el-icon-edit"
                @click="editCateClick(data)"
              >编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                icon="el-icon-delete"
                @click="remove(node, data)"
              >删除</el-button>
            </span>
          </span>
        </el-tree>
      </div>
    </el-card>
    <el-dialog :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <span slot="title">{{editId ? '编辑' : '新建'}}分类</span>
      <el-form label-width="70px">
        <el-form-item label="上级分类">
          <!-- <el-select v-model="model.parent">
            <el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id"></el-option>
          </el-select>-->
          <el-cascader
            v-model="model.parent"
            :options="items"
            :props="optionProps"
            :key="cascaderKey"
            :show-all-levels="false"
            filterable
            clearable
          ></el-cascader>
        </el-form-item>

        <el-form-item label="名称">
          <el-input v-model="model.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="editCateSumbit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
      optionProps: {
        checkStrictly: true,
        expandTrigger: "hover",
        value: "id",
        label: "label",
        children: "children",
        emitPath: false
      },
      items: [],
      dialogVisible: false,
      editId: null, //编辑分类的id
      model: {},
      cascaderKey: 1
    };
  },
  methods: {
    addCate() {
      //新建分类
      this.dialogVisible = true;
    },
    async editCateClick(data) {
      //编辑分类
      const res = await this.$http.get(`rest/categories/${data.id}`);
      // window.console.log(res.data);
      this.model = res.data;
      this.editId = data.id;
      this.dialogVisible = true;
    },
    async editCateSumbit() {
      //提交编辑
      if (this.editId) {
        await this.$http.put(`rest/categories/${this.editId}`, this.model);
      } else {
        await this.$http.post("rest/categories", this.model);
      }
      this.items = [];
      this.editId = null;
      this.model = {};
      this.dialogVisible = false;

      this.fetch();
      this.$message({
        type: "success",
        message: "提交成功"
      });
    },
    remove(node) {
      //删除分类
      // window.console.log(node);
      // window.console.log(data);
      let row = node.data;
      this.$confirm(`是否确定要删除分类 "${row.label}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        await this.$http.delete(`rest/categories/${row.id}`);

        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.items = [];
        this.fetch();
      });
    },
    handleClose() {
      //弹窗关闭事件
      this.editId = null;
      this.model = {};
      this.dialogVisible = false;
    },
    async fetch() {
      this.items = [];
      const res = await this.$http.get("rest/categories");
      // window.console.log(res.data);
      // window.console.log(JSON.parse(JSON.stringify(res.data)));
      let catesArr = [];
      // 初始化树状控件数据格式
      res.data.map(async (value) => {
        
        if (!value.parent) {
          window.console.log(!value.parent);
          let catesItems = {
            id: value._id,
            label: value.name
          };
          window.console.log(value);
          if (value.children.length != 0 || value.children ) {
            catesItems.children = value.children;
          }
          if (value.children.length != 0 || value.children ) {
            for (let i = 0; i < value.children.length; i++) {
              let res = await this.$http.get(
                `rest/categories/${value.children[i]}`
              );
              // window.console.log(res)
              catesItems.children[i] = {
                id: res.data._id,
                disabled: true,
                label: res.data.name
              };

              if (res.data.children.length != 0) {
                catesItems.children[i].children = res.data.children;
              }
            }
          }
          catesArr.push(catesItems);
        }
      });
      // window.console.log(catesArr);
      this.items = catesArr;
    }
  },
  created() {
    this.items = [];
    this.fetch();
  },
  watch: {
    //切换数据源
    changeMenu() {
      ++this.cascaderKey;
    }
  }
};
</script>

<style>
.el-tree-node__content {
  padding: 8px 0;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>