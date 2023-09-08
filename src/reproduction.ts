import { IpRange } from "javascript-sdk";

export class ReproductionTest {
  /**
   * Converts an array of {IpRange} objects into a string.
   * @param {Array<IpRange>} ipRangeList
   * @returns {string}
   */
  private stringifyIpRanges(ipRangeList: Array<IpRange>): string {
    let ipRangeStr = "";
    for (const ipRange of ipRangeList) {
      if (ipRange.start === ipRange.end) {
        ipRangeStr += `${ipRange.start},`;
      } else {
        ipRangeStr += `${ipRange.start}-${ipRange.end},`;
      }
    }
    return ipRangeStr.substr(0, ipRangeStr.length - 1);
  }
}
