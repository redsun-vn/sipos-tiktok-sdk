# TikTok Shop Node.js SDK

SDK chính thức để tích hợp TikTok Shop API vào ứng dụng Node.js của bạn.

## Mục lục

- [Yêu cầu](#yêu-cầu)
- [Cài đặt](#cài-đặt)
- [Cấu hình](#cấu-hình)
- [Xác thực](#xác-thực)
- [Sử dụng API](#sử-dụng-api)
- [Các API được hỗ trợ](#các-api-được-hỗ-trợ)
- [Ví dụ](#ví-dụ)

## Yêu cầu

Trước khi tích hợp SDK, bạn cần:

1. [Tạo tài khoản seller test](https://partner.tiktokshop.com/docv2/page/6789f75a38b3f103167690dc)
2. [Tạo test access token](https://partner.tiktokshop.com/docv2/page/6789f75d2dccb8030e8dece5)
3. Lấy `app_key` và `app_secret` từ TikTok Shop Developer Portal

Tài liệu trực tuyến: [TikTok Shop API SDK](https://partner.tiktokshop.com/docv2/page/67c83e0799a75104986ae498)

## Cài đặt

### Yêu cầu hệ thống

- Node.js phiên bản 16 trở lên
- npm, yarn, hoặc pnpm

### Các bước cài đặt

#### Cách 1: Cài đặt từ NPM (Khuyến nghị)

Nếu SDK đã được publish lên NPM:

```bash
# npm
npm install tiktok-shop-nodejs-sdk

# yarn
yarn add tiktok-shop-nodejs-sdk

# pnpm
pnpm add tiktok-shop-nodejs-sdk
```

#### Cách 2: Sử dụng từ Source Code (Local Development)

**Bước 1:** Clone hoặc copy thư mục SDK vào máy của bạn

**Bước 2:** Build SDK

```bash
cd path/to/tiktok-shop-nodejs-sdk
npm install
npm run build
```

**Bước 3:** Link SDK globally (để sử dụng như module)

```bash
npm link
```

**Bước 4:** Trong dự án của bạn, link SDK

```bash
cd path/to/your-project
npm link tiktok-shop-nodejs-sdk
```

#### Cách 3: Import trực tiếp từ Path

Trong dự án của bạn, import trực tiếp từ đường dẫn:

```typescript
import { TikTokShopNodeApiClient } from '/absolute/path/to/tiktok-shop-nodejs-sdk';
```

**Bước 1:** Thêm dependencies vào dự án của bạn

Thêm vào `package.json`:

```json
{
  "dependencies": {
    "request": "2.88.2"
  },
  "devDependencies": {
    "@types/request": "2.48.12",
    "@types/node": "16",
    "tslib": "2.6.2",
    "typescript": "^4.9.5"
  }
}
```

**Bước 2:** Cấu hình TypeScript

Thêm vào `tsconfig.json`:

```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "target": "ES2017",
    "module": "commonjs",
    "strict": true
  }
}
```

#### Cách 4: Cài đặt từ GitHub Repository

Trong `package.json` của dự án NestJS:

```json
{
  "dependencies": {
    "tiktok-shop-nodejs-sdk": "github:redsun-vn/sipos-tiktok-sdk#main"
  }
}
```

Sau đó cài đặt:

```bash
npm install
# hoặc
yarn install
```

**Lưu ý:** SDK cần được build trước khi sử dụng. Nếu gặp lỗi, hãy đảm bảo repository đã được build với `npm run build`.

## Cấu hình

### Import SDK

Sau khi cài đặt, import SDK vào dự án của bạn:

```typescript
// Nếu cài đặt từ NPM
import { ClientConfiguration, TikTokShopNodeApiClient } from 'tiktok-shop-nodejs-sdk';

// Nếu sử dụng local link hoặc path
import { ClientConfiguration, TikTokShopNodeApiClient } from 'tiktok-shop-nodejs-sdk';
```

### Khởi tạo Client

Có 2 cách để cấu hình SDK:

#### Cách 1: Global Configuration (Khuyến nghị)

```typescript
import { ClientConfiguration, TikTokShopNodeApiClient } from 'tiktok-shop-nodejs-sdk';

// Cấu hình global cho toàn bộ ứng dụng
ClientConfiguration.globalConfig.app_key = "your_app_key";
ClientConfiguration.globalConfig.app_secret = "your_app_secret";

// Tạo client instance
const client = new TikTokShopNodeApiClient({
  config: {
    sandbox: false, // true cho môi trường test, false cho production
  },
});
```

#### Cách 2: Instance Configuration

```typescript
import { ClientConfiguration, TikTokShopNodeApiClient } from 'tiktok-shop-nodejs-sdk';

const config = ClientConfiguration.createConfig()
  .setAppKey("your_app_key")
  .setAppSecret("your_app_secret")
  .setBasePath("https://open-api.tiktokglobalshop.com")
  .build();

const client = new TikTokShopNodeApiClient({ config });
```

## Xác thực

### Lấy Access Token từ Authorization Code

```typescript
import { AccessTokenTool } from 'tiktok-shop-nodejs-sdk';

const authCode = "authorization_code_from_oauth";

try {
  const tokenResponse = await AccessTokenTool.getAccessToken(
    authCode,
    "your_app_key",
    "your_app_secret"
  );
  
  const accessToken = tokenResponse.body.data?.access_token;
  const refreshToken = tokenResponse.body.data?.refresh_token;
  
  console.log("Access Token:", accessToken);
} catch (error) {
  console.error("Error getting access token:", error);
}
```

### Refresh Access Token

```typescript
import { AccessTokenTool } from 'tiktok-shop-nodejs-sdk';

try {
  const tokenResponse = await AccessTokenTool.refreshToken(
    "your_refresh_token",
    "your_app_key",
    "your_app_secret"
  );
  
  const newAccessToken = tokenResponse.body.data?.access_token;
  const newRefreshToken = tokenResponse.body.data?.refresh_token;
  
  console.log("New Access Token:", newAccessToken);
} catch (error) {
  console.error("Error refreshing token:", error);
}
```

### Sử dụng AccessToken Class

```typescript
import { AccessToken } from 'tiktok-shop-nodejs-sdk';

const accessToken = new AccessToken({
  access_token: "your_access_token",
  refresh_token: "your_refresh_token",
});

// Tự động refresh và cập nhật token
const result = await accessToken.refreshToken({ auto_filled: true });
console.log("Token refreshed:", accessToken.access_token);
```

## Sử dụng API

### Cấu trúc API Call

Tất cả API calls đều có cấu trúc tương tự:

```typescript
const result = await client.api.<ApiName>.<MethodName>(
  param1,
  accessToken,
  'application/json',
  shopCipher?, // optional
  requestBody?, // optional
  options? // optional headers
);

console.log(result.body); // Response data
console.log(result.response.statusCode); // HTTP status code
```

### Ví dụ: Product API

#### Chỉnh sửa sản phẩm (Partial Edit)

```typescript
import { TikTokShopNodeApiClient, ClientConfiguration } from 'tiktok-shop-nodejs-sdk';

const client = new TikTokShopNodeApiClient({ config: {} });
const accessToken = "your_access_token";
const productId = "product_id";

try {
  const result = await client.api.ProductV202509Api.ProductsProductIdPartialEditPost(
    productId,
    accessToken,
    'application/json',
    undefined, // shopCipher (optional)
    {
      product: {
        title: "Tên sản phẩm mới",
        description: "Mô tả sản phẩm",
      }
    }
  );
  
  console.log("Product updated:", result.body);
} catch (error) {
  console.error("Error:", error);
}
```

#### Chỉnh sửa sản phẩm toàn cầu

```typescript
const globalProductId = "global_product_id";

const result = await client.api.ProductV202509Api.GlobalProductsGlobalProductIdPartialEditPut(
  globalProductId,
  accessToken,
  'application/json',
  {
    product: {
      title: "Global Product Title",
      description: "Global Product Description",
    }
  }
);

console.log("Global product updated:", result.body);
```

### Ví dụ: Order API

#### Lấy thông tin đơn hàng

```typescript
const orderIds = ["order_id_1", "order_id_2"];

try {
  const result = await client.api.OrderV202507Api.OrdersGet(
    orderIds,
    accessToken,
    'application/json',
    undefined // shopCipher (optional)
  );
  
  console.log("Orders:", result.body.data?.orders);
} catch (error) {
  console.error("Error:", error);
}
```

### Ví dụ: Fulfillment API

#### Tạo First Mile Bundle

```typescript
const result = await client.api.FulfillmentV202510Api.FirstMileBundlePost(
  accessToken,
  'application/json',
  undefined, // shopCipher
  {
    package_ids: ["package_id_1", "package_id_2"],
  }
);

console.log("Bundle created:", result.body);
```

## Các API được hỗ trợ

SDK hỗ trợ các API versions mới nhất (cập nhật tháng 12/2025):

| Module | Version | Mô tả |
|--------|---------|-------|
| **Analytics** | V202508 | Phân tích và báo cáo |
| **Authorization** | V202403 | Xác thực và phân quyền |
| **Customer Service** | V202407 | Chăm sóc khách hàng |
| **Data Reconciliation** | V202401 | Đối soát dữ liệu |
| **Event** | V202309 | Quản lý sự kiện |
| **Finance** | V202507 | Quản lý tài chính |
| **Fulfillment** | V202510 | Xử lý đơn hàng |
| **Logistics** | V202510 | Vận chuyển và logistics |
| **Order** | V202507 | Quản lý đơn hàng |
| **Product** | V202509 | Quản lý sản phẩm |
| **Promotion** | V202406 | Quản lý khuyến mãi |
| **Return/Refund** | V202309 | Trả hàng và hoàn tiền |
| **Seller** | V202309 | Thông tin seller |
| **Supply Chain** | V202309 | Chuỗi cung ứng |

### Cách sử dụng các API khác

Mỗi API module có thể được truy cập thông qua:

```typescript
client.api.<ModuleName>V<Version>Api.<MethodName>()
```

Ví dụ:
- `client.api.ProductV202509Api.*` - Product API
- `client.api.OrderV202507Api.*` - Order API
- `client.api.FulfillmentV202510Api.*` - Fulfillment API
- `client.api.FinanceV202507Api.*` - Finance API

## Sử dụng trong NestJS

### Tạo TikTok Shop Service

Tạo file `tiktok-shop.service.ts`:

```typescript
import { Injectable } from '@nestjs/common';
import {
  ClientConfiguration,
  TikTokShopNodeApiClient,
  AccessTokenTool
} from 'tiktok-shop-nodejs-sdk';

@Injectable()
export class TikTokShopService {
  private client: TikTokShopNodeApiClient;

  constructor() {
    // Cấu hình từ environment variables
    ClientConfiguration.globalConfig.app_key = process.env.TIKTOK_APP_KEY || '';
    ClientConfiguration.globalConfig.app_secret = process.env.TIKTOK_APP_SECRET || '';

    this.client = new TikTokShopNodeApiClient({
      config: {
        sandbox: process.env.NODE_ENV !== 'production'
      }
    });
  }

  async getAccessToken(authCode: string): Promise<string> {
    try {
      const tokenResponse = await AccessTokenTool.getAccessToken(
        authCode,
        ClientConfiguration.globalConfig.app_key,
        ClientConfiguration.globalConfig.app_secret
      );

      return tokenResponse.body.data?.access_token || '';
    } catch (error) {
      throw new Error(`Failed to get access token: ${error.message}`);
    }
  }

  async updateProduct(productId: string, accessToken: string, updateData: any) {
    try {
      const result = await this.client.api.ProductV202509Api.ProductsProductIdPartialEditPost(
        productId,
        accessToken,
        'application/json',
        undefined,
        { product: updateData }
      );

      return result.body;
    } catch (error) {
      throw new Error(`Failed to update product: ${error.message}`);
    }
  }

  async getOrders(orderIds: string[], accessToken: string) {
    try {
      const result = await this.client.api.OrderV202507Api.OrdersGet(
        orderIds,
        accessToken,
        'application/json',
        undefined
      );

      return result.body;
    } catch (error) {
      throw new Error(`Failed to get orders: ${error.message}`);
    }
  }
}
```

### Tạo Module

Tạo file `tiktok-shop.module.ts`:

```typescript
import { Module } from '@nestjs/common';
import { TikTokShopService } from './tiktok-shop.service';

@Module({
  providers: [TikTokShopService],
  exports: [TikTokShopService],
})
export class TikTokShopModule {}
```

### Sử dụng trong Controller

```typescript
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { TikTokShopService } from './tiktok-shop.service';

@Controller('tiktok-shop')
export class TikTokShopController {
  constructor(private readonly tikTokShopService: TikTokShopService) {}

  @Post('auth/token')
  async getAccessToken(@Body('authCode') authCode: string) {
    return {
      accessToken: await this.tikTokShopService.getAccessToken(authCode)
    };
  }

  @Post('products/:productId')
  async updateProduct(
    @Param('productId') productId: string,
    @Body('accessToken') accessToken: string,
    @Body('updateData') updateData: any
  ) {
    return await this.tikTokShopService.updateProduct(productId, accessToken, updateData);
  }

  @Get('orders')
  async getOrders(
    @Body('orderIds') orderIds: string[],
    @Body('accessToken') accessToken: string
  ) {
    return await this.tikTokShopService.getOrders(orderIds, accessToken);
  }
}
```

### Import Module trong App

Trong `app.module.ts`:

```typescript
import { Module } from '@nestjs/common';
import { TikTokShopModule } from './tiktok-shop/tiktok-shop.module';

@Module({
  imports: [TikTokShopModule],
})
export class AppModule {}
```

### Cấu hình Environment Variables

Tạo file `.env`:

```env
TIKTOK_APP_KEY=your_app_key_here
TIKTOK_APP_SECRET=your_app_secret_here
NODE_ENV=development  # hoặc production
```

```typescript
import { 
  ClientConfiguration, 
  TikTokShopNodeApiClient, 
  AccessTokenTool 
} from 'tiktok-shop-nodejs-sdk';

// Cấu hình
ClientConfiguration.globalConfig.app_key = "your_app_key";
ClientConfiguration.globalConfig.app_secret = "your_app_secret";

const client = new TikTokShopNodeApiClient({
  config: { sandbox: false }
});

const main = async () => {
  try {
    // 1. Lấy access token
    const authCode = "your_auth_code";
    const tokenResponse = await AccessTokenTool.getAccessToken(
      authCode,
      ClientConfiguration.globalConfig.app_key,
      ClientConfiguration.globalConfig.app_secret
    );
    
    const accessToken = tokenResponse.body.data?.access_token;
    
    if (!accessToken) {
      throw new Error("Failed to get access token");
    }
    
    // 2. Chỉnh sửa sản phẩm
    const productId = "your_product_id";
    const updateResult = await client.api.ProductV202509Api.ProductsProductIdPartialEditPost(
      productId,
      accessToken,
      'application/json',
      undefined,
      {
        product: {
          title: "Sản phẩm cập nhật",
          description: "Mô tả mới",
        }
      }
    );
    
    console.log("Product updated successfully:");
    console.log(JSON.stringify(updateResult.body, null, 2));
    
  } catch (error) {
    console.error("Error:", error);
  }
};

main();
```

### Error Handling

```typescript
try {
  const result = await client.api.ProductV202509Api.ProductsProductIdPartialEditPost(
    productId,
    accessToken,
    'application/json',
    undefined,
    requestBody
  );
  
  // Kiểm tra response code
  if (result.body.code === 0) {
    console.log("Success:", result.body.data);
  } else {
    console.error("API Error:", result.body.message);
  }
} catch (error) {
  if (error instanceof HttpError) {
    console.error("HTTP Error:", error.statusCode, error.body);
  } else {
    console.error("Unknown Error:", error);
  }
}
```

## Lưu ý quan trọng

1. **Access Token**: Token có thời hạn 7 ngày, cần refresh trước khi hết hạn
2. **Rate Limiting**: Tuân thủ giới hạn API calls của TikTok Shop
3. **Error Handling**: Luôn implement error handling cho mọi API calls
4. **Sandbox vs Production**: Sử dụng `sandbox: true` khi test
5. **API Versioning**: Sử dụng version mới nhất cho features mới nhất

## Tài liệu tham khảo

- [TikTok Shop API Documentation](https://partner.tiktokshop.com/docv2)
- [Developer Portal](https://partner.tiktokshop.com/)
- [API Testing Tool](https://partner.tiktokshop.com/docv2/page/api-testing-tool)

## Hỗ trợ

Nếu gặp vấn đề, vui lòng:
1. Kiểm tra [FAQs](https://partner.tiktokshop.com/docv2/page/faqs)
2. Liên hệ TikTok Shop Developer Support
