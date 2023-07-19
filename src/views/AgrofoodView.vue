<script setup>
import { onMounted } from "vue";
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
<style lang="scss">
tr:nth-child(even) {
  background-color: #f2f2f2; /* Set the background color for even rows */
}

tr:nth-child(odd) {
  background-color: #ffffff; /* Set the background color for odd rows */
}
td {
  @apply px-2 py-2;
  border: 1px solid #ccc; /* Add border to each td */
  padding: 8px; /* Add padding to each td */
}
</style>
<template>
  <div class="flex justify-between">
    <div class="-mx-6">
      <h1 class="flex items-center">
        <span
          ><img
            src="@/assets/images/heading-left.png"
            alt="heading-icon"
          />
        </span>
        <span class="text-primary-dark font-semibold">Agro Food</span>
      </h1>
    </div>
    <div class="mx-8">
      <a
        href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=124:agriculture-food-processing&Itemid=308"
        target="_blank"
        class="font-normal px-2 py-1 bg-gradient-to-r from-blue-600 to-green-400 rounded-md text-white mr-2"
        >Pre-feasibility report</a
      >
      <a
        href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=28&Itemid=139"
        target="_blank"
        class="font-normal px-2 py-1 bg-gradient-to-r from-blue-600 to-green-400 rounded-md text-white mr-2"
        >Sector Brief</a
      >
      <a
        href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=176:agrofood&Itemid=981"
        target="_blank"
        class="font-normal px-2 py-1 bg-gradient-to-r from-blue-600 to-green-400 rounded-md text-white"
        >Business Guides</a
      >
    </div>
  </div>

  <div class="px-8 py-8 min-h-[500px]">
    <table class="border bottom-1">
      <thead>
        <tr>
          <th
            class="border border-slate-300 py-4 bg-gradient-to-r from-blue-600 to-green-300 text-white font-medium text-lg"
            colspan="2"
          >
            General Registrations/Licenses
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="w-1/3">
            <p>Registration of trade mark/Copy right</p>
          </td>
          <td>
            <p>
              Legally registration is not mandatory but required for claiming
              any right in the court and for import or export purposes as per
              requirement of counterpart.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Registration of partnership</p>
          </td>
          <td>
            <p>For registered partnership business</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Registration of Company</p>
          </td>
          <td>
            <p>For doing business as company</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>NTN/Registration with SMEDA</p>
          </td>
          <td>
            <p>
              For tax purpose, claiming concessions/exemptions, import/export
              registration etc.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Registration for payment of tax on services</p>
          </td>
          <td>
            <p>In case taxable services involved</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Professional Tax registration</p>
          </td>
          <td>
            <p>For payment of professional tax</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>L-17 License (Retail sale)</p>
          </td>
          <td>
            <p>For doing retail business</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>L-17 License (Whole-Sale)</p>
          </td>
          <td>
            <p>For doing business as whole seller</p>
          </td>
        </tr>
        <tr>
          <td bgcolor="#ffffff">
            <p>Environmental Approval - EIA &amp; IEE</p>
          </td>
          <td>
            <p>
              Environmental Impact Assessment (EIA) / Initial Environmental
              Examination (IEE) Directorate plays a major role in implementing
              the Pakistan Environment Protection Act (PEPA) -1997 specifically
              Section-12 and Review of IEE/EIA Regulations 2000.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>PESSI Registration</p>
          </td>
          <td>
            <p>
              It is mandatory for an establishment having 5 or more employees,
              to register with PESSI under the Sub-Section (3) of Section 1 of
              the Provincial Employees Social Security Ordinance, 1965.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Shops &amp; Establishment Registration</p>
          </td>
          <td>
            <p>
              Punjab Shops and Establishments Ordinance, 1969 is applicable on
              commercial establishments, industrial establishments and
              factories. The rule made under the Ordinance makes every employer
              to maintain certain records and registers.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Registration of Factories</p>
          </td>
          <td>
            <p>
              Under the Factories Act 1934, registration of any premises,
              including the precincts thereof, wherein ten or more workers are
              working, or were working on any day of the preceding twelve
              months, and in any part of which a manufacturing process is being
              carried on, or is ordinarily carried on with or without the aid of
              power, but does not include a mine, subject to the operation of
              the Mines Act, 1923 (IV of 1923) is required.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Patent and Desing Registration</p>
          </td>
          <td>
            <p>
              To claim any right under Patent and Design law, registration is
              required under the Patent Ordinance, 2000 and the Registered
              Design Ordinance, 2000.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Halal Certificate</p>
          </td>
          <td>
            <p>
              Pakistan National Accreditation Council (PNAC) is the authority
              responsible for implementation of regulations controlling Halal
              Certification in Pakistan
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              License to Food Business Operator working food products in any
              area but selling products within jurisdiction of Punjab Food
              Authority.
            </p>
          </td>
          <td>
            <p>
              Under Punjab Food Authority Act, 2011, if a food operator
              manufactures, sells, offers for sale, stores or distributes or
              imports any food without the prescribed registration or license,
              he shall be liable to imprisonment for a term which may extend to
              one year but which shall not be less than three days and fine
              which may extend to five hundred thousand rupees but which shall
              not be less than ten thousand rupees.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Certificate Food Product Registration</p>
          </td>
          <td>
            <p>
              Under the Food Authority (Product Registration and Display of PFA
              Logo) Regulations, 2017, every manufacturer, trader or importer or
              whole seller who intend to store, import, transport, export,
              manufacture or sale of food product is required to register and
              get certificate of product registration from the Authority.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Label approval</p>
          </td>
          <td>
            <p>
              Requirement under the Punjab Food Authority (Food
              Packaging/Contact Material) Regulations, 2018
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Transit Permit to carry wood/forest produce</p>
          </td>
          <td>
            <p>
              No forest produce shall be imported into or exported from any
              forest division or transported through any part of it unless
              covered and permitted under the Punjab Forest Transit Rules, 2013
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Leasing of fishing rights</p>
          </td>
          <td>
            <p>
              Department of Fisheries Punjab, lease out the fishing rights of
              public waters annually or three years under the Prescribed terms
              and conditions
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>License for FAT Rendering Unit</p>
          </td>
          <td>
            <p>
              It is compulsory for fat rendering units to get a license from the
              PFA
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Food grain license</p>
          </td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>
            <p>Flour mills registration/wheat quota Enlistment</p>
          </td>
          <td>
            <p>
              Requirement under the Food Grains (Licensing Control) Order, 1957
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Distribution &amp; Sale of Pesticide</p>
          </td>
          <td>
            <p>Agriculture Pesticide Ordinance 1971 Rule 1973</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Distribution and Sale Fertilizer</p>
          </td>
          <td>
            <p>Fertilizer control Act (FCA 1999 Rules 2003)</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>License for sugar Broker</p>
          </td>
          <td>
            <p>Managed Under the Sugar Factories Control Act, 1950</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>License for Purchasing Agent</p>
          </td>
          <td>
            <p>Managed Under the Sugar Factories Control Act, 1950</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Registration of market functionaries</p>
          </td>
          <td>
            <p>
              Under the Punjab Agricultural Marketing Regulatory Authority
              Act<br />
              2018.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Registration of Market Workers</p>
          </td>
          <td>
            <p>
              the Punjab Agricultural Marketing Regulatory Authority Act<br />
              2018.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              Installation License for cotton ginning, pressing and seed oil
              factory
            </p>
          </td>
          <td>
            <p>
              No cotton ginning or cotton pressing factory shall be worked
              without a license granted to the occupier thereof under the Punjab
              Cotton Control Ordinance, 1966
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              Working License for cotton ginning, pressing and seed oil factory
            </p>
          </td>
          <td>
            <p>
              No cotton ginning or cotton pressing factory shall be worked
              without a license granted to the occupier thereof under the Punjab
              Cotton Control Ordinance, 1966
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Crop variety testing and approval</p>
          </td>
          <td>
            <p>PARC, Provincial Seed Council, Provincial Research Institute</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Crop variety registration</p>
          </td>
          <td>
            <p>National Seed Council through FSCR Dept.</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Registration of seed and person</p>
          </td>
          <td>
            <p>
              According to the amendment, no unregistered person, whether it is
              farmers or institutions, will be allowed to stock, sell or
              exchange any seeds without official permission. It will be a
              punishable crime with prescribed fines and<br />
              imprisonment.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Conformity Assessment of product</p>
          </td>
          <td>
            <p>
              For launching a product, conformity assessment with the mandatory
              standard prescribed PSQCA is required under the conformity rules
              2008.
            </p>
          </td>
        </tr>
      </tbody>
    </table>

    <h1
      class="my-4 bg-gradient-to-r from-blue-600 to-green-400 rounded-md text-white py-2 px-2"
    >
      Sector Based Requirements
    </h1>
    <ul class="pb-4 list-disc ps-8">
      <li>NOC For Building Plan Approval</li>
      <li>Permission of new tube well/ ejector pump</li>
      <li>Water connection</li>
      <li>NOC for right of way</li>
      <li>License for Installation of New Distillery Plant.</li>
      <li>NOC for Effluent Disposal</li>
      <li>NOC form Irrigation Department that site is not prone to flooding</li>
      <li>
        L-42-B License (Possession of rectified spirit for industrial purpose)
      </li>
      <li>Agreement for usage of irrigation water for industrial purposes</li>
      <li>Approval of conversion of land use</li>
      <li>Building Plan Approval</li>
      <li>
        L-42-B License (Possession of rectified spirit for educational,
        scientific purpose)
      </li>
      <li>Registration of boilers</li>
      <li>Registration of pressure vessels</li>
      <li>Verification of weighing/measuring instruments</li>
      <li>Confirmation of compliance</li>
      <li>Recommendations for import approval</li>
      <li>NOC of H.T Installations</li>
      <li>Verification of test reports of L.T Installation</li>
      <li>NOC for installation of streamers</li>
      <li>NOC for Installation of Billboards</li>
      <li>Plot Sub division Approval</li>
      <li>Building Plans Approval, LDA Housing Scheme</li>
      <li>Building Plans Approval, Controlled Area</li>
      <li>Land use- Permitted Commercial (List A Roads)</li>
      <li>Land Use - Permissible Commercial</li>
      <li>Completion Certificate</li>
      <li>Annual Commercialization Renewal</li>
      <li>Revised / Addition / Alteration / Rebuild Building Plans Approval</li>
      <li>Conversion of land use</li>
      <li>Building plan approval</li>
      <li>Completion Certificate</li>
    </ul>
  </div>
</template>
